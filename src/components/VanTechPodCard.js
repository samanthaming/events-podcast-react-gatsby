import React from 'react';

const VanTechPodCard = () => {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="panel-info">
          <p>Hear our weekly events segment on the&nbsp;
            <a
              href="http://www.vancouvertechpodcast.ca/"
              target="_blank"
              rel="noopener noreferrer"
              title="Hear our weekly events segment on the Vancouver Tech Podcast"
            >
              Vancouver Tech Podcast
            </a>
            &nbsp;where I give a quick summary of the top tech events you should check out!
          </p>
          <div className="text-center">
            <a
              href="http://www.vancouvertechpodcast.ca/"
              target="_blank"
              rel="noopener noreferrer"
              title="Hear our weekly events segment on the Vancouver Tech Podcast"
            >
              <img
                src="/partners/community-partner-vancouver-tech-podcast.png"
                alt="Vancouver Tech Podcast Logo"
                style={{ width: '80px'}}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VanTechPodCard;
