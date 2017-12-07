import React from 'react';
import PropTypes from "prop-types";
import Episode from '../components/Episode';
import Jumbotron from '../components/Jumbotron';

import '../css/index.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      <div className="row">
        <div className="container-fluid">
          <Jumbotron data={data.site.siteMetadata.site} />
        </div>
      </div>
      <div className="container episode-list">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => (
            <Episode key={post.id} {...post.frontmatter} />
          ))}
      </div>
    </div>
  );
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        site {
          twitter
          facebook
          instagram
          rss
          itunes
          googlePlay
          soundcloud
          siteDescription
        }
      }
    }
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            path
            date
            parent
            description
            time
            episode
            artwork
            soundcloud
          }
        }
      }
    }
  }
`;
