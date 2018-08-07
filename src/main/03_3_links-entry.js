import React from 'react';
// import '../img/delete';

const LinksEntry = (props) => (
  <div className="urls-form">  
    <div className="link-list">
      <div>
        {/* <div className="url-delete"><img src="https://blogfiles.pstatic.net/MjAxODA4MDdfMjQz/MDAxNTMzNjEzMjUxNDIz.Z0m4S9COD1Oa22uvPiJDutS9wEhA7DP79FRr0zCffX4g.bdk2RYX2pe_f63Sj7ZHQjc6jL7vMiC7dqXRwMlzqIGQg.PNG.cloncat/01_delete.png" alt=""/></div> */}
        {/* <div className="url-delete"><img src="https://blogfiles.pstatic.net/MjAxODA4MDdfMjU1/MDAxNTMzNjEzMjUxNDIz.K9cjDh5aSF8cz9D0HnHEFeuJCoUOzr1e9RNB_08aoREg.mJG502ceLNLHIQZG6WT_ylSYkB_QZIwEWlEp96Vqpyog.PNG.cloncat/05_delete.png" alt=""/></div> */}
        <div className="url-delete"><img src="https://blogfiles.pstatic.net/MjAxODA4MDdfMTc2/MDAxNTMzNjEzMjUxNDIz.DOpQN61hNGZ1erYTaYdFVsAd4L7Kv4sDQXNKFJCQkN4g.H1gSaGXlWykldwDBLJHUGeZI2vqM7hF5vOrDNbfvtawg.PNG.cloncat/03_delete.png" alt=""/></div>
        {/* <div className="url-delete"><img src="https://blogfiles.pstatic.net/MjAxODA4MDdfMjIz/MDAxNTMzNjEzMjUxNDIz.xO8AXrKXmrOpojbqEkurNtggk1OqvoslLJk1OBG6NKkg.6YDLhqEiEefuafLPEksd6p7-jzCeA66RzRx5mrJlO5sg.PNG.cloncat/02_delete.png" alt=""/></div> */}
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