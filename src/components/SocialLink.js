import React from "react";

const SocialLink = prop => {
  const { social } = prop;

  return (
    <ul className="list-inline social-links">
      {Object.keys(social).map((key) => (
        <li key={key}>
          <a href={social[key]} title={`Follow us on ${key.toUpperCase()}`}>
            <i className={`fa fa-${key}`} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLink;
