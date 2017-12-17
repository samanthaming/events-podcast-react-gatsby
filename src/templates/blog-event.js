import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from "prop-types";
import EventSchedule from '../components/EventSchedule';
import PodcastCard from '../components/PodcastCard';
import UpcomingEventCard from '../components/UpcomingEventCard';
import VanTechPodCard from '../components/VanTechPodCard';
import BackToEvents from '../components/BackToEvents';

export default function EventTemplate(props) {
  const {markdownRemark, site} = props.data;
  const {frontmatter: event, html} = markdownRemark;
  const {title, email, domain, site: data} = site.siteMetadata;

  return (
    <div>
      <Helmet>
        <title>{`Vancouver Tech Events: ${title} - Events Podcast`}</title>
        <meta
          name="description"
          content="Schedule of upcoming Tech Events in Vancouver, BC, Canada. Don't miss out on these events with our weekly picks."
        />
      </Helmet>
      <div className="container" style={{marginTop: '38px'}}>
        <div className="row">
          <div className="col-lg-8">
            <EventSchedule html={html} title={event.title}/>
          </div>
          <div className="col-lg-4 events-aside">
            <PodcastCard title={title} data={data} description={data.siteDescription}/>
            <UpcomingEventCard email={email} domain={domain}/>
            <VanTechPodCard/>
          </div>
        </div>
      </div>
      <BackToEvents />
    </div>
  );
}

export const pageQuery = graphql `
  query EventQuery($path: String!) {
    site {
      siteMetadata {
        title
        email
        domain
        site {
          rss
          stitcher
          itunes
          googlePlay
          soundcloud
          siteDescription
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        category
        path
      }
    }
  }
`;

EventTemplate.propTypes = {
  data: PropTypes.object.isRequired
};
