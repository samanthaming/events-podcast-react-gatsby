import React from 'react';
import PropTypes from "prop-types";
import Helmet from 'react-helmet';
import EventSchedule from '../components/EventSchedule';
import PodcastCard from '../components/PodcastCard';
import UpcomingEventCard from '../components/UpcomingEventCard';
import VanTechPodCard from '../components/VanTechPodCard';
import PreviousEvents from '../components/PreviousEvents';

const Events = (props) => {
  const {allMarkdownRemark, site} = props.data;
  const {node: markdown} = allMarkdownRemark.edges[0];
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
            <EventSchedule html={markdown.html} type={`new`} title={markdown.frontmatter.title} />
          </div>
          <div className="col-lg-4 events-aside">
            <PodcastCard title={title} data={data} description={data.siteDescription} />
            <UpcomingEventCard email={email} domain={domain} />
            <VanTechPodCard />
          </div>
        </div>
      </div>
      <PreviousEvents events={allMarkdownRemark.edges.slice(1)} />
    </div>
  );
}

export const eventsQuery = graphql`
query EventsQuery {
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
  allMarkdownRemark(
    filter: {frontmatter: {category: {eq: "event"}}}
    sort: {fields: [frontmatter___date], order: DESC}
    limit: 4
  ) {
    edges {
      node {
        id
        html
        frontmatter {
          title
          date
          category
          path
        }
      }
    }
  }
}
`;

Events.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Events;
