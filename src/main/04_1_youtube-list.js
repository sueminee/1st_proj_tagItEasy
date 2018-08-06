import React, { Component } from 'react';
import YoutubeEntry from './04_2_youtube-entry'
class Youtube extends Component {
  
  render() {
    return (
      <div className="app-title"><h2>가장 핫한 당신의 태그 #{this.props.query}</h2>
        <div className="youtube">
          <div className="youtube-inner">
            {/* {console.log(this.props)} */}
            {this.props.videos.map((item, index) => <YoutubeEntry video={item} key={index}/> )}
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