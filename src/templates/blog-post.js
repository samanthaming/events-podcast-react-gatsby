import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from "prop-types";

export default function Template(props) {
  const { markdownRemark: post } = props.data;

  return (
    <div className="container" id="episode-page">
      <Helmet>
        <title>{`${post.frontmatter.title} - Events Podcast`} </title>
        <meta name="description" content={post.frontmatter.description} />
      </Helmet>
      <div className="col-lg-8 col-lg-offset-2">
        <div className="podcast-heading">
          <h1 className="podcast-title">
            {`# ${post.frontmatter.episode} ${post.frontmatter.title}`}
          </h1>
          <p className="podcast-time">
            {`${post.frontmatter.time} min listen`}
          </p>
        </div>
        <div className="podcast-player">
          <iframe
            title={post.frontmatter.title}
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${post.frontmatter.soundcloud}&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false`}
          />
        </div>
        <div className="podcast-shownotes" dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr className="section-hr" />
        <h6 className="section-title">
          <a href="/">View More Episodes</a>
        </h6>
      </div>
    </div>
  );
}

Template.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
        description
        time
        episode
        artwork
        soundcloud
      }
    }
  }
`;
