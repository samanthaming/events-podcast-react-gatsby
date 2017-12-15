import React from 'react';
import PropTypes from "prop-types";
import AboutPodcast from '../components/AboutPodcast';
import AboutMe from '../components/AboutMe';
import ContactUsCard from '../components/ContactUsCard';
import FollowUsCard from '../components/FollowUsCard';

const About = ({data}) => {
  const {siteMetadata} = data.site;
  const socialLinks = {
    twitter:siteMetadata.site.twitter,
    facebook:siteMetadata.site.facebook,
    instagram:siteMetadata.site.instagram,
  };

  return (
    <div className="container">
      <div className="col-lg-8">
        <AboutPodcast {...siteMetadata}/>
        <AboutMe {...siteMetadata}/>
      </div>
      <div className="col-lg-4">
        <div className="about-aside">
          <ContactUsCard email={siteMetadata.email}/>
          <FollowUsCard social={socialLinks}/>
        </div>
      </div>
    </div>
  );
}

export const query = graphql `
query AboutQuery {
  site {
    siteMetadata {
      email
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
