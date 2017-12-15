import React from 'react';
import Helmet from 'react-helmet';

export default function EventTemplate(props) {
  const { markdownRemark: post } = props.data;

  return (
    <div>
      <div className="container" style={{marginTop: '38px'}}>
        <div className="row">
          <div className="col-lg-8">

          </div>
        </div>
      </div>

    </div>
  );
}

