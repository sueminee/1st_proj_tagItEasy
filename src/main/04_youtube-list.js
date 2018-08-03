import React, { Component } from 'react';
import YoutubeEntry from './05_youtube-entry';

class Youtube extends Component {
  
  render() {
    return (
      <div>
        {this.props.videos.map(item => <YoutubeEntry video={item} /> )}
        {/* {this.props.videos.map(item => console.log(item) )} */}
        {/* {console.log("이 아이가 어레이가 맞느냐?", this.props.videos)} */}
        {/* <span>{console.log(this.props.videos[0].snippet.title)}</span> */}
      </div>
    );
  }
}

export default Youtube;