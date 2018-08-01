// main의 home

import React, { Component } from 'react';
import Search from './02_search';
import Youtube from './04_youtube-list';

class Home extends Component {
  state = {
    query : 'chopin',
    videos : '',
  }


  componentDidMount(){
    const query = this.state.query;
    const key = 'AIzaSyB8mkBm4WoZ75Dz0C_ooMDwiTF3JwcdHas';
    const max = 3;
    fetch(
      `https://www.googleapis.com/youtube/v3/search?autoplay=true&part=snippet&type=video&contentType=application%2Fjson&q=${query}&key=${key}&maxResults=${max}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          video: data.items
        })
      })
      .catch(err => console.log(err));
  }

  getData = () => {
    const query = this.state.query;
    const key = 'AIzaSyB8mkBm4WoZ75Dz0C_ooMDwiTF3JwcdHas';
    const max = 5;
    fetch(
      `https://www.googleapis.com/youtube/v3/search?autoplay=true&part=snippet&type=video&contentType=application%2Fjson&q=${query}&key=${key}&maxResults=${max}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentVideo: data.items[0],
          video: data.items,
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Search />
        <Youtube videos={this.state.videos}/>
      </div>
    );
  }
}

export default Home;