import React from 'react';
import PropTypes from "prop-types";
import Episode from '../components/Episode';

import '../css/index.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="container episode-list">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => (
          <Episode key={post.id} {...post.frontmatter} />
        ))}
    </div>
  );
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            description
            soundcloud
          }
        }
      }
    }
  }
`;
