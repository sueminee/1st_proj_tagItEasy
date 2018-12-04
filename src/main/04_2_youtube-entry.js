import React, { Component } from 'react';

class YoutubeEntry extends Component {
  render() {
    // console.log("야호");
    return (
      <div className="youtube-item">
        {/* <div className="thumbnail">
          <img src = {this.props.video.snippet.thumbnails.default.url} alt=""/>
        </div> */}
        <div className="iframe">
          <iframe title="popular tag" className="youtube-player" src={"https://www.youtube.com/embed/"+this.props.video.id.videoId} allowFullScreen aria-hidden="true"></iframe>
        </div>
        <div className="title" onClick={() => this.props.handleCurrent(this.props.video)} >
          {this.props.video.snippet.title}
        </div>
      </div>
    );
  }
}

export default YoutubeEntry;
