import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../img/logo.png'
import Post from './02_post';
import Links from './03_1_links';
import Youtube from './04_1_youtube-list';

class Home extends Component {
  state = {
    videos: null,
    query:'',
    url:'',
    description:'',
    tagOne:'',
    tagTwo:'',
    tagThree:'',
    tagsWithNum:[],
    datas:[],
    sortBy: 'new',
    selectedItem: [],
    isEmpty: true
  }

  componentDidMount() {
    if (!window.localStorage.getItem('token')) {
      return <Redirect to ='/'/>;
    }
    this.getDBdata();
  }

  getTagData = () => {
    // fetch('http://ec2-54-180-2-226.ap-northeast-2.compute.amazonaws.com/urls/tags',{
    // fetch('api/urls/tags', {
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
      tagArr.sort()

      const tagsWithNum = [];
      for(var i=0; i<tagArr.length; i++){
        tagsWithNum.push(tagArr[i]+"("+ data[tagArr[i]]+")")
      }
      this.setState({tagsWithNum: tagsWithNum})
    })
    .catch(err => console.log("getTagData 함수에서 GET요청 실패err : ", err))
  }

  getDBdata = () => {
    // fetch('http://ec2-54-180-2-226.ap-northeast-2.compute.amazonaws.com/urls/new',{
    // fetch('api/urls/new', {
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
      // console.log('getDBdata 함수에서 GET해온 data', data)
      this.setState({
        datas: data,
        query: data[0].tag[0],
        isEmpty: false
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
  urlChange = (e) => {this.setState({url: e.target.value.trim()})}
  desChange = (e) => {this.setState({description: e.target.value.trim()})}
  tag1Change = (e) => {this.setState({tagOne: e.target.value.trim()})}
  tag2Change = (e) => {this.setState({tagTwo: e.target.value.trim()})}
  tag3Change = (e) => {this.setState({tagThree: e.target.value.trim()})}

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

    // fetch('http://ec2-54-180-2-226.ap-northeast-2.compute.amazonaws.com/urls', {
    // fetch('api/urls', {
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
    .then((data) => {
      // console.log('submitNewURL함수에서 POST 후 response로 받는 data : ', data)
      this.getDBdata();
      this.getYoutubeData();
    })
    .catch((err) => console.log('submitNewURL fetch err : ', err))
  }
  //______________________________________________________________________________________________________
  
  logout = (e) => {
    e.preventDefault();
    window.localStorage.removeItem('token');
    this.props.history.push('/')
  }

  getFilteredData =(e) =>{
    e.preventDefault();
    let query = `http://localhost:8080/urls/new`
    if(this.state.selectedItem.length > 0){
      query =`http://localhost:8080/urls/${this.state.sortBy}/tags?array=${JSON.stringify(this.state.selectedItem)}`
    } else{
      query =`http://localhost:8080/urls/${this.state.sortBy}`
    }
    console.log("getFilteredData 함수 fetch전 query", query)
    fetch(query, {
      method : 'GET',
      headers: {
        'Accept' : 'application/JSON, text/plain, */*',
        'Content-type' : 'application/json',
        'Authorization' : window.localStorage.token
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log('getFilteredData 함수에서 GET해온 data', data)
      this.setState({datas: data})
    })
    .catch(err => console.log("getDBdata 함수에서 GET요청 실패했다", err))
  }

  handleCheckboxChange = (e) => {
  const checkedArr = this.state.selectedItem;
    if(e.target.checked){
      const value = e.target.value;
      const endIndex = value.indexOf("(");
      const slicedValue = value.slice(0, endIndex);
      checkedArr.push(slicedValue);
    }
    else if(e.target.type==="checkbox") {
      const unCheckedIndex = checkedArr.indexOf(e.target.value);
      checkedArr.splice(unCheckedIndex, 1); 
    }

    this.setState({selectedItem: checkedArr})
    
    console.log("handleCheckboxChange 에서 this.state: ", this.state)
  }

  handleRadioChange = (e) => {
    this.setState({sortBy: e.target.value})
    console.log("handleRadioChange에서 state 찍는중: ", this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header-home">
          <div className="logo-home">
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

          {this.state.isEmpty
            ? <div className="isEmpty">북마크하고 싶은 URL이 있다면, 위 파란박스 URL에 붙여넣기 해주세요!</div>
            : (this.state.videos === null
                ? <div>
                    <Links datas={this.state.datas}
                          tags={this.state.tags}
                          tagsWithNum={this.state.tagsWithNum}
                          sortBy={this.state.sortBy}
                          selectedItem={this.state.selectedItem}
                          getFilteredData={this.getFilteredData}
                          handleCheckboxChange={this.handleCheckboxChange}
                          handleRadioChange={this.handleRadioChange}
                          getDBdata={this.getDBdata} />
                    <div>곧 로딩!</div>
                  </div>
                : <div>
                    <Links datas={this.state.datas}
                          tags={this.state.tags}
                          tagsWithNum={this.state.tagsWithNum}
                          sortBy={this.state.sortBy}
                          selectedItem={this.state.selectedItem}
                          getFilteredData={this.getFilteredData}
                          handleCheckboxChange={this.handleCheckboxChange}
                          handleRadioChange={this.handleRadioChange}
                          getDBdata={this.getDBdata} />
                    <Youtube query={this.state.query} videos={this.state.videos}/>
                  </div>
                )}
        </div>
      </div>
    );
  }
}

export default Home;