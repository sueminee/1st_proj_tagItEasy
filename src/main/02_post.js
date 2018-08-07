import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="search-compo">
      {/* {console.log("안녕 i am in post render")} */}
        <form  className="search-form" onSubmit={(e) => {this.props.submitNewURL(e)}}>
           {/* e.preventDefault();
           this.props.submitNewURL(e); */}
          <div className="search-left">
            <div className="search-url">
              <div>
                <label className="label-url moreover">url</label>
                <input className="input-url" type="text" name="url" placeholder="URL 복붙은 요기!" onChange={this.props.urlChange}/>
              </div>
              <div>
                <label className="label-url">title</label>
                <input className="input-url" id="make-less" type="text" name="description" placeholder="URL 한줄 짧은 설명" onChange={this.props.desChange}/>
              </div>
            </div>
            <div className="tags">
              <label className="label-tag">tag</label>
              <input className="input-tag" type="text" name="tag1" placeholder="태그이름 짓기" onChange={this.props.tag1Change}/>
              <input className="input-tag" type="text" name="tag2" placeholder="태그이름 짓기" onChange={this.props.tag2Change}/>
              <input className="input-tag" type="text" name="tag3" placeholder="태그이름 짓기" onChange={this.props.tag3Change}/>
            </div>
          </div>
          {/* <div> {this.state.tags.map(tag =><label><input type="checkbox" name="tag" value={tag} />{tag}</label>)}</div> */}
          <div><button className="app-button-white">저장</button></div>
        </form>
      </div>
    );
  }
}

export default Post;


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