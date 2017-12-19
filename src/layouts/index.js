import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import TopNav from './TopNav';
import Footer from './Footer';
import Jumbotron from '../components/Jumbotron';
import '../css/styles.scss';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location, data } = this.props;
    const isRoot = location.pathname === '/';

    return (
      <div>
        <Helmet
          title="Home - Events Podcast"
          meta={[
            { name: 'description', content: 'Events Podcast is a show that summaries the best Tech and Business talks at Vancouver Events.' },
          ]}
        />
        <div className="body-wrap">
          <TopNav siteData={data.site.siteMetadata} />
          {this.props.children()}
        </div>
        <Footer data={data.site.siteMetadata.site} />
      </div>
    );
  }
}

export const query = graphql`
query TemplateQuery {
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
}
`
