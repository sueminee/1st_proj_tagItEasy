import React from 'react';
// import '../img/delete';

const LinksEntry = (props) => (
  <div className="urls-form">  
    <div className="link-list">
      <div>
        <div className="url-delete"><img src="https://blogfiles.pstatic.net/MjAxODA4MDdfMTMg/MDAxNTMzNjA2Njg0NjYw.a4lVthhO9GDUC4ujhN5pHozTYetkmX6c6eHOWIY6IOwg.sZL7uaOXdt7rhlZlS2uf_N6GV9GW0aswByTGrJWDPxwg.PNG.cloncat/delete_white_grey.png" alt=""/></div>
        <div className="link-title">{props.data.description}</div>
      </div>
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