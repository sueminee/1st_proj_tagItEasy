import React, { Component } from 'react';
import YoutubeEntry from './05_youtube-entry';

class Youtube extends Component {
  render() {
    return (
      <div>
        {this.props.videos.map(item => <YoutubeEntry video={item} /> )}
      </div>
    );
  }
}

export default Youtube;