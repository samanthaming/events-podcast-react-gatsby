import React from 'react';
import PropTypes from "prop-types";
import AboutPodcast from '../components/AboutPodcast';
import AboutMe from '../components/AboutMe';

const About = ({data}) => {
  const { siteMetadata } = data.site;
  return (
    <div className="container">
      <div className="col-lg-8">
        <AboutPodcast {...siteMetadata} />
        <AboutMe {...siteMetadata} />
      </div>
      <div className="col-lg-4">

      </div>
    </div>
  );
}

export const query = graphql`
query AboutQuery {
  site {
    siteMetadata {
      site {
        twitter
        facebook
        instagram
        rss
        itunes
        googlePlay
        soundcloud
        siteDescription
        hostInstagram
        hostTwitter
      }
    }
  }
}
`
About.propTypes = {
  data: PropTypes.object.isRequired
};

export default About;
