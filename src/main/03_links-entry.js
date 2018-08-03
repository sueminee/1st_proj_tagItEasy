import React from 'react';

const LinksEntry = (props) => (
  <div className="urls-form">
    <div className="link-list">
      <div className="link-title">{props.data.description}</div>
      <div className="link-url">{props.data.url}</div>
    </div>
    <div className="tags-form">
      <div className="link-tags"># {props.data.tag[0]}</div>
      {props.data.tag[1] ? <div className="link-tags"># {props.data.tag[1]}</div> : null}
      {props.data.tag[2] ? <div className="link-tags"># {props.data.tag[2]}</div> : null}
    </div>
  </div>
)

export default LinksEntry;