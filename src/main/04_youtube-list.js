import React, { Component } from 'react';
import YoutubeEntry from './05_youtube-entry';

class Youtube extends Component {
  
  render() {
    console.log('@@@@__youtybelist가 받는 프롭스__@@@@@', this.props.videos)
    return (
      <div className="app-title"><h2>가장 핫한 당신의 태그 #{this.props.query}</h2>
        <div className="youtube">
          <div className="youtube-inner">
            {this.props.videos.map(item => <YoutubeEntry video={item} /> )}
            {/* {this.props.videos.map(item => console.log(item) )} */}
            {/* {console.log("이 아이가 어레이가 맞느냐?", this.props.videos)} */}
            {/* <span>{console.log(this.props.videos[0].snippet.title)}</span> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Youtube;