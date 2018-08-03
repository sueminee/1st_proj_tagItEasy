import React, { Component } from 'react';
import '../img/logo.png'
import Post from './02_post';
import Links from './03_links';
import Youtube from './04_youtube-list';
import { PassThrough } from 'stream';


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
    fetch('http://localhost:3333/urls/tags',{
      method : 'GET',
      headers: {
        'Accept' : 'application/JSON, text/plain, */*',
        'Content-type' : 'application/json',
        'Authorization' : window.localStorage.token
      },
    })
    .then(res => res.json())
    .then(data => {
      // console.log('####__이거슨 user의 모든 TAG들이다.__####', data)
      const tagArr = Object.keys(data);
      this.setState({tags: tagArr});

      const tagsWithNum = [];
      for(var i=0; i<tagArr.length; i++){
        tagsWithNum.push(tagArr[i]+"("+ data[tagArr[i]]+")")
      }
      this.setState({tagsWithNum: tagsWithNum})
    })
    .catch(err => console.log("&&&&__getTagData 함수에서 GET요청 실패했다__&&&&", err))
  }

  getDBdata = () => {
    fetch('http://localhost:3333/urls/new',{
      method : 'GET',
      headers: {
        'Accept' : 'application/JSON, text/plain, */*',
        'Content-type' : 'application/json',
        'Authorization' : window.localStorage.token
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log('@@@@@__getDBdata :이거슨 get해온 데이타다__@@@@@', data)
      this.setState({
        datas: data,
        query: data[0].tag[0]
      })
      this.getYoutubeData(data[0].tag[0])
      this.getTagData();
    })
    .catch(err => console.log("&&&&__getDBdata 함수에서 GET요청 실패했다__&&&&", err))
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
        // console.log("%%%%%__getYoutubeData에서 fetch 한 후 this.state 찍어보는중__%%%%%", this.state)
      })
      .catch(err => console.log("@@@@@__getYoutubeData에서 fetch err__@@@@@", err));
  }


  //________________________search component 에 내려줄 함수들__________________________________
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

    fetch('http://localhost:3333/urls', {
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
    .then((data) => console.log('$$$$$__submitNewURL하고 나서 response로 받는 data__$$$$$', data))
    .catch((err) => console.log('$$$$$__submitNewURL__$$$$$', err))

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
