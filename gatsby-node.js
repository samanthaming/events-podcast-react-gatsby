const path = require('path');

const createTagPages = (createPage, edges) => {
  const tagTemplate = path.resolve(`src/templates/tags.js`);
  const posts = {};

  edges
    .forEach(({ node }) => {
      if (node.frontmatter.tags) {
        node.frontmatter.tags
          .forEach(tag => {
            if (!posts[tag]) {
              posts[tag] = [];
            }
            posts[tag].push(node);
          });
      }
    });

  createPage({
    path: '/tags',
    component: tagTemplate,
    context: {
      posts
    }
  });

  Object.keys(posts)
    .forEach(tagName => {
      const post = posts[tagName];
      createPage({
        path: `/tags/${tagName}`,
        component: tagTemplate,
        context: {
          posts,
          post,
          tag: tagName
        }
      })
    });
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const podcastPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const eventPostTemplate = path.resolve(`src/templates/blog-event.js`);

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          timeToRead
          frontmatter {
            path
            date
            title
            tags
          }
        }
      }
    }
  }`)
  .then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges;

    createTagPages(createPage, posts);

    // Create podcast pages
    const podcastPosts = posts.filter(({node}) => {
      return node.frontmatter.path.includes(`/episode/`);
    });

    podcastPosts.forEach((edge, index) => {
      const prev = index === 0 ? false : podcastPosts[index - 1].node;
      const next = index === podcastPosts.length - 1 ? false : podcastPosts[index + 1].node;

      createPage({
        path: `${edge.node.frontmatter.path}`,
        component: podcastPostTemplate,
        context: {
          prev,
          next
        }
      })
    });

    // Create event pages
    const eventPosts = posts.filter(({node}) => {
      return node.frontmatter.path.includes(`/event/`);
    });

    eventPosts.forEach((edge, index) => {
      const prev = index === 0 ? false : eventPosts[index - 1].node;
      const next = index === eventPosts.length - 1 ? false : eventPosts[index + 1].node;

      createPage({
        path: `${edge.node.frontmatter.path}`,
        component: eventPostTemplate,
        context: {
          prev,
          next
        }
      })
    });

    return posts;
  })
};
