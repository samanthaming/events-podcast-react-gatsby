import React from "react";
import PropTypes from "prop-types";

const imgFolder = `partners`;

const partners = [
  {
    name: "Vancouver Tech Podcast",
    href: "http://www.vancouvertechpodcast.ca/",
    img: `/${imgFolder}/community-partner-vancouver-tech-podcast.png`,
    isHoriz: false
  },
  {
    name: "Elevator Ventures",
    href: "http://elevatorventures.ca/",
    img: `/${imgFolder}/community-partner-elevator.png`,
    isHoriz: true
  },
  {
    name: "Spring Startup School",
    href: "http://spring.is/",
    img: `/${imgFolder}/community-partner-spring.png`,
    isHoriz: false
  },
  {
    name: "New Ventures BC",
    href: "http://www.newventuresbc.com/",
    img: `/${imgFolder}/community-partner-new-ventures.png`,
    isHoriz: true
  }
];

const Partner = props => {
  const { name, href, img, isHoriz } = props;
  return (
    <li className={isHoriz ? `cp-horizontal` : ``}>
      <a
        href={href}
        title={`Visit our Community Partner;s Site - ${name}`}
        target="_blank"
      >
        <img src={img} alt={`${name} Logo`} />
      </a>
    </li>
  );
};

const CommunityPartner = () => (
  <div className="community-partners">
    <h3 className="title">
      <span>
        <i className="fa fa-heart" aria-hidden="true" />
      </span>
      &nbsp;Community Partners
    </h3>

    <ul>
      {partners.map((partner, index) => <Partner key={index} {...partner} />)}
    </ul>
  </div>
);

Partner.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isHoriz: PropTypes.bool.isRequired,
};

export default CommunityPartner;
