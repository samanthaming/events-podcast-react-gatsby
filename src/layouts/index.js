import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import TopNav from './TopNav';
import "font-awesome/scss/font-awesome.scss";

// import '../css/typography.css';
import '../css/styles.scss';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };



  render() {
    console.log(this.props);
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
        <TopNav siteData={data.site.siteMetadata} />
        <div
          style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: isRoot ? `1.45rem 1.0875rem` : `1rem 0.75rem`,
            }}
          >
            <h1 style={{ margin: 0, fontSize: isRoot ? `2.5rem` : `2rem` }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Gatsby Blog
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
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
      }
    }
  }
}
`
