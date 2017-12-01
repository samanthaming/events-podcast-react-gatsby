import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import TopNav from './TopNav';
import Footer from './Footer';
import CommunityPartner from '../components/CommunityPartner';
import "font-awesome/scss/font-awesome.scss";
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
          title="Gatsby Default (Blog) Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div className="body-wrap">
          <TopNav siteData={data.site.siteMetadata} />
          {this.props.children()}
          <CommunityPartner />
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
      }
    }
  }
}
`
