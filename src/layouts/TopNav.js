import React from "react";
import PropTypes from "prop-types";

const SocialList = ({ cname, link }) => {
  const socials = ["facebook", "instagram", "twitter"];
  return (
    <ul className={cname}>
      {socials.map(social => (
        <li key={social}>
          <a href={link[social]} title={`Follow on ${social}`}>
            <i className={`fa fa-${social}`} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
};

const TopNav = ({ siteData }) => (
  <nav className="navbar navbar-default">
    <div className="navbar-header">
      <a className="navbar-brand" href="/">
        {siteData.title}
      </a>
      <SocialList
        cname="list-inline hidden-md hidden-lg hidden-sm navbar-header-social"
        link={siteData.site}
      />
    </div>

    <SocialList
      cname="list-inline hidden-xs nav navbar-nav navbar-right navbar-social"
      link={siteData.site}
    />

    <ul className="nav navbar-nav navbar-right navbar-menu">
      <li>
        <a href="/events/">Events</a>
      </li>
      <li>
        <a href="/about/">About</a>
      </li>
    </ul>
  </nav>
);

SocialList.propTypes = {
  cname: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired
};

TopNav.propTypes = {
  siteData: PropTypes.object.isRequired
};

export default TopNav;
