import React from 'react';

const SocialList = ({cname, link}) => {
  let socials = ["facebook", "instagram", "twitter"];
  return (
    <ul className={ cname }>
    { socials.map(function(social, index){
      return (
        <li key={index}>
          <a href={ link[social] } title={`Follow on ${social}`}>
            <i className={`fa fa-${ social }`} aria-hidden="true"></i>
          </a>
        </li>
      );
    })}
    </ul>
  );
}

const TopNav = ({siteData}) => {

  return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          {siteData.title}
        </a>
        <SocialList
          cname="list-inline hidden-md hidden-lg hidden-sm navbar-header-social"
          link={siteData.site} />
      </div>

      <SocialList
        cname="list-inline hidden-xs nav navbar-nav navbar-right navbar-social"
        link={siteData.site} />

      <ul className="nav navbar-nav navbar-right navbar-menu">
        <li>
          <a href="">Events</a>
        </li>
        <li>
          <a href="/about/">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
