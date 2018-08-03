import React, { Component } from 'react';

class YoutubeEntry extends Component {
  render() {
    console.log("야호");
    return (
      <div className="youtube-item">
        <div className="thumbnail">
          <img src = {this.props.video.snippet.thumbnails.default.url} alt=""/>
        </div>
        
        {/* <div className="title-des"> */}
          {/* <div className="title" onClick={() => this.props.handleCurrent(this.props.video)} > */}
          <div className="title" >
            {this.props.video.snippet.title}
          </div>

          {/* <div className="description">
          {this.props.video.snippet.description}
          </div> */}
        {/* </div> */}
      </div>
    );
  }
}

export default YoutubeEntry;