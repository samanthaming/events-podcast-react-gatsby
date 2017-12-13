import React from "react";

const SocialLink = prop => {
  const { social } = prop;

  return (
    <ul className="list-inline social-links">
      {Object.entries(social).map(([key, url]) => (
        <li key={key}>
          <a href={url} title={`Follow us on ${key.toUpperCase()}`}>
            <i className={`fa fa-${key}`} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLink;
