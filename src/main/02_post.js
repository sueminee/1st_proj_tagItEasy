import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="search-compo">
      {/* {console.log("안녕 i am in post render")} */}
        <div  className="search-form" >
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
          <div><button className="app-button-white" onClick={() => {this.props.submitNewURL()}}>저장</button></div>
        </div>
      </div>
    );
  }
}

export default Post;