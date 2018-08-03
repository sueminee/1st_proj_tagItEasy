import React, { Component } from 'react';
import Post from './02_post';
import Youtube from './04_youtube-list';
import Links from './03_links';

class Home extends Component {
  state = {
    youtube : {
      query : 'listz',
      videos : null
    },
    // tags : ['poodle', 'samoyed', 'goldenretriever', 'goldenDoodle', 'corgi']
    url:'',
    description:'',
    tagOne:'',
    tagTwo:'',
    tagThree:''
  }

  componentDidMount(){
    this.getYoutubeData();
    this.getDBdata();
    //get하는 함수 만들어서 그냥 여기서 실행.
    //this.getDBdata(); 
    // fetch(
    //   //우리서버에 fetch
    //   //토큰있는지 확인하고
    //   //get요청
    // )
  }

  getDBdata = () => {
    fetch('http://localhost:3333/urls')
    .then(response => console.log("handle HTTP response", response))
    .catch(err => console.log("handle network error", err))
  }


  getYoutubeData = () => {
    const query = this.state.youtube.query;
    const key = 'AIzaSyB8mkBm4WoZ75Dz0C_ooMDwiTF3JwcdHas';
    const max = 3;
    fetch(
      `https://www.googleapis.com/youtube/v3/search?autoplay=true&part=snippet&type=video&contentType=application%2Fjson&q=${query}&key=${key}&maxResults=${max}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          youtube: {
            query: query,
            videos: data.items
          }
        })
        console.log(this.state)
      })
      .catch(err => console.log(err));
  }


  //################################____________search component 에 내려줄 함수들______________________###################################
  urlChange = (e) => {
    this.setState({url: e.target.value})
    console.log('안녕', this.state);
  }

  desChange = (e) => {
    this.setState({description: e.target.value})
    console.log('안녕', this.state);
  }

  tag1Change = (e) => {
    this.setState({tagOne: e.target.value})
    console.log('안녕', this.state);
  }

  tag2Change = (e) => {
    this.setState({tagTwo: e.target.value})
    console.log('안녕', this.state);
  }

  tag3Change = (e) => {
    this.setState({tagThree: e.target.value})
    console.log('안녕', this.state);
  }

  submitNewURL = (e) => {
		e.preventDefault();
    let {url, description, tagOne, tagTwo, tagThree}  = this.state;
    let payload ={
      url: url,
      description: description,
      tagOne: tagOne,
      tagTwo: tagTwo,
      tagThree: tagThree  
    }

    //console.log(typeof window.localStorage, typeof window.localStorage.token, window.localStorage.token)

    fetch('http://localhost:3333/urls', {
      method : 'POST',
      mode: 'cors',
			headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type' : 'application/json',
        'Authorization' : window.localStorage.token
			},
			body:JSON.stringify(payload)
		})
		.then((res) => {
      //console.log('로컬', window.localStorage)
      //console.log('레스',res)
      return res.json()
    })
    .then((data) => console.log('data', data))
    .catch(() => console.log('wtf'))
  }
  //####################################################################################

  render() {
    //const{componentDidMount, getData, urlChange, desChange, tag1Change, tag2Change, tag3Change, submitNewURL} = this.props;
    return (
      <div>
        <Post urlChange={this.urlChange}
              desChange={this.desChange}
              tag1Change={this.tag1Change}
              tag2Change={this.tag2Change}
              tag3Change={this.tag3Change}
              submitNewURL={this.submitNewURL} />
        <div>
          <Links />
        </div>
        {this.state.youtube.videos === null ? <div>loading...</div> :
        <div>
          <div>
            <Youtube videos={this.state.youtube.videos}/>
          </div>
        </div>}
      </div>
    );
  }
}

export default Home;