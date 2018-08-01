import React, { Component } from 'react';

class Search extends Component {
  state = {
    // tags : ['poodle', 'samoyed', 'goldenretriever', 'goldenDoodle', 'corgi']
    url:'',
    description:'',
    tagOne:'',
    tagTwo:'',
    tagThree:''
  }

  urlChange = (e) => {
    console.log('안녕', this.state);
    this.setState({url: e.target.value})
    console.log('안녕2', this.state);
  }

  desChange = (e) => {
    console.log('안녕', this.state);
    this.setState({description: e.target.value})
    console.log('안녕2', this.state);
  }

  tag1Change = (e) => {
    console.log('안녕', this.state);
    this.setState({tagOne: e.target.value})
    console.log('안녕2', this.state);
  }

  tag2Change = (e) => {
    console.log('안녕', this.state);
    this.setState({tagTwo: e.target.value})
    console.log('안녕2', this.state);
  }

  tag3Change = (e) => {
    console.log('안녕', this.state);
    this.setState({tagThree: e.target.value})
    console.log('안녕2', this.state);
  }

  submitNewURL = (e) => {
		e.preventDefault();
		let url = this.state.url;
		let description = this.state.description;
    let tagOne = this.state.tagOne;
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
			method : 'POST',
			headers: {
				'Accept' : 'application/JSON, text/plain, */*',
				'Content-type' : 'application/json'
			},
			body:JSON.stringify({url:url, description:description, tagOne:tagOne})
		})
		.then((res) => res.json())
    .then((data) => console.log(data))
    .catch(() => console.log('wtf'))
    console.log('yaho')
  }



  render() {
    return (
      <div className="search-compo">
      {console.log("안녕 i am in render", this.state)}
        <form  className="search-form" onSubmit={(e) => {this.submitNewURL(e)}}>
          <div className="search-left">
            <div className="search-url">
              <div>
                <label className="label-url moreover">url</label>
                <input className="input-url" type="text" name="url" placeholder="Copy URL and Paste it here!" onChange={this.urlChange}/>
              </div>
              <div>
                <label className="label-url">title</label>
                <input className="input-url" id="make-less" type="text" name="description" placeholder="Write description for this URL" onChange={this.desChange}/>
              </div>
            </div>
            <div className="tags">
              <label className="label-tag">tag</label>
              <input className="input-tag" type="text" name="tag1" placeholder="enter tag1" onChange={this.tag1Change}/>
              <input className="input-tag" type="text" name="tag2" placeholder="enter tag2" onChange={this.tag2Change}/>
              <input className="input-tag" type="text" name="tag3" placeholder="enter tag3" onChange={this.tag3Change}/>
            </div>
          </div>
    
          {/* <div> {this.state.tags.map(tag =><label><input type="checkbox" name="tag" value={tag} />{tag}</label>)}</div> */}
          <div><button className="app-button-white">저장</button></div>
          
        </form>
      </div>
    );
  }
}

export default Search;


  //  링크 input 
  //  링크 디스크립션
  //  신규 태그 input : https://www.npmjs.com/package/react-multivalue-text-input
  //  기존 태그 리스트 checkbox : https://www.npmjs.com/package/react-onchange-value
  //  저장버튼

  // _onSearchChange = (event) => {
  //   let {url} = this.state;

  //   // 어떻게 push하나요...???
  //   // let tag = this.state.tag;
  //   // if(event.target.name === "tag1"){
  //   //   tag.push(event.target.value);
  //   //   url[tag]=this.state.tag;
  //   //   this.setState({url: url});
  //   // }
  //   console.log('안녕', this.state, '안녕');

  //   const fieldName = event.target.name;
  //   const fieldValue = event.target.value;
  //   //이렇게 하려면, 일단 state.url안에 있는 애들을 url 밖으로 빼야함.(원래 빼고싶어서 시작함.)
  //   //그르구 이렇게 하면 console.log(안녕)이랑 안녕2랑 달라짐.
  //   // this.state[fieldName] = fieldValue;
  //   // this.setState()
  //   url[fieldName]=fieldValue;
  //   this.setState({url: url})
  //   console.log('안녕2', this.state, '안녕2');
  //   }