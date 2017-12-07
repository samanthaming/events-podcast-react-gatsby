import React from 'react';
import AboutPodcast from '../components/AboutPodcast';


const About = ({data}) => {
  const { siteMetadata } = data.site;
  return (
    <div className="container">
      <div className="col-lg-8">
        <AboutPodcast {...siteMetadata} />
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
      }
    }
  }
}
`

export default About;
