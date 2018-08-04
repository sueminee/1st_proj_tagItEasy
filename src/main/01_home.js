import React, { Component } from 'react';
import '../img/logo.png'
import Post from './02_post';
<<<<<<< HEAD
import Links from './03_1_links';
import Youtube from './04_1_youtube-list';
=======
import Links from './03_links';
import Youtube from './04_youtube-list';
import { PassThrough } from 'stream';
>>>>>>> 8089a57799637adf48fa2912c4f5101c05d9f945

class Home extends Component {
  state = {
    videos:null,
    query:'',
    url:'',
    description:'',
    tagOne:'',
    tagTwo:'',
    tagThree:'',
    tags: [],
    tagsWithNum:[],
    datas:[]
  }

  componentDidMount(){
    this.getDBdata();
  }

  getTagData = () => {
    fetch('http://localhost:8080/urls/tags',{
      method : 'GET',
      headers: {
        'Accept' : 'application/JSON, text/plain, */*',
        'Content-type' : 'application/json',
        'Authorization' : window.localStorage.token
      },
    })
    .then(res => res.json())
    .then(data => {
      // console.log('getTagData 에서 get해온 data: ', data)
      const tagArr = Object.keys(data);
      this.setState({tags: tagArr});

      const tagsWithNum = [];
      for(var i=0; i<tagArr.length; i++){
        tagsWithNum.push(tagArr[i]+"("+ data[tagArr[i]]+")")
      }
      this.setState({tagsWithNum: tagsWithNum})
    })
    .catch(err => console.log("getTagData 함수에서 GET요청 실패err : ", err))
  }

  getDBdata = () => {
    fetch('http://localhost:8080/urls/new',{
      method : 'GET',
      headers: {
        'Accept' : 'application/JSON, text/plain, */*',
        'Content-type' : 'application/json',
        'Authorization' : window.localStorage.token
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log('getDBdata 함수에서 GET해온 data', data)
      this.setState({
        datas: data,
        query: data[0].tag[0]
      })
      this.getYoutubeData(data[0].tag[0])
      this.getTagData();
    })
    .catch(err => console.log("getDBdata 함수에서 GET요청 실패했다", err))
  }

  getYoutubeData = (q) => {
    const query = q;
    const key = 'AIzaSyB8mkBm4WoZ75Dz0C_ooMDwiTF3JwcdHas';
    const max = 3;
    fetch(
      `https://www.googleapis.com/youtube/v3/search?autoplay=true&part=snippet&type=video&contentType=application%2Fjson&q=${query}&key=${key}&maxResults=${max}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({videos: data.items})
        // console.log("getYoutubeData 함수에서 fetch 후 this.state 찍으면 : ", this.state)
      })
      .catch(err => console.log("getYoutubeData에서 fetch err : ", err));
  }


  //________________________Post component 에 내려줄 함수들__________________________________
  urlChange = (e) => {this.setState({url: e.target.value})}
  desChange = (e) => {this.setState({description: e.target.value})}
  tag1Change = (e) => {this.setState({tagOne: e.target.value})}
  tag2Change = (e) => {this.setState({tagTwo: e.target.value})}
  tag3Change = (e) => {this.setState({tagThree: e.target.value})}

  submitNewURL = (e) => {
		// e.preventDefault();
    let {url, description, tagOne, tagTwo, tagThree}  = this.state;
    let payload ={
      url: url,
      description: description,
      tagOne: tagOne,
      tagTwo: tagTwo,
      tagThree: tagThree  
    }

    fetch('http://localhost:8080/urls', {
      method : 'POST',
			headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type' : 'application/json',
        'Authorization' : window.localStorage.token
			},
			body:JSON.stringify(payload)
		})
		.then((res) => res.json())
    .then((data) => console.log('submitNewURL함수에서 POST 후 response로 받는 data : ', data))
    .catch((err) => console.log('submitNewURL fetch err : ', err))

    this.getDBdata();
    this.getYoutubeData();
  }
  //______________________________________________________________________________________________________
  
  logout = (e) => {
    e.preventDefault();
    window.localStorage.removeItem('token');
    this.props.history.push('/auth/login')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo">
            <img src={require("../img/logo.png")} alt=""/>
          </div>
          <div>
            <form onSubmit={(e) => {this.logout(e)}}>
              <button className="logout-button">LogOut</button>
            </form>
          </div>
        </header>
        <div>
          <Post urlChange={this.urlChange}
                  desChange={this.desChange}
                  tag1Change={this.tag1Change}
                  tag2Change={this.tag2Change}
                  tag3Change={this.tag3Change}
                  submitNewURL={this.submitNewURL} />

          <Links datas={this.state.datas} tags={this.state.tags} tagsWithNum={this.state.tagsWithNum}/>
          
          {this.state.videos === null ? <div>loading...</div> :
          <div>
            <div>
              <Youtube query={this.state.query} videos={this.state.videos}/>
            </div>
          </div>}

        </div>
      </div>
    );
  }
}

export default Home;
