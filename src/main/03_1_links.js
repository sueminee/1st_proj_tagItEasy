import React, { Component } from 'react';
import LinksEntry from './03_3_links-entry';
import LinksFilter from './03_2_links-filter';

class Links extends Component {


  render() {
    return (
      <div className="links-filter-list">
        <div className="links-filter-list-inner">
          <div className="links-filter">
            {/* {this.props.tags.map(tag =><label><input type="checkbox" name="tag" value={tag} />{tag}</label>)} */}
            <form onSubmit={(e) => this.props.getFilteredData(e)}>
              <div className="radio">
                <label><input type="radio" name="sort" value="new" onClick={this.props.handleRadioChange} />최신순</label>
                <label><input type="radio" name="sort" value="popular" onClick={this.props.handleRadioChange} />인기순</label>
              </div>
              <div className="need-scroll">
                {/* {this.props.tagsWithNum.map(tagN =><label><input type="checkbox" name="tag" value={tagN} />{tagN}</label>)} */}
                {this.props.tagsWithNum.map(tagN => <LinksFilter tagN={tagN} handleCheckboxChange={this.props.handleCheckboxChange}/>)}
              </div>
              <div>
                <button type="submit">적용</button>
              </div>
            </form>
          </div>

          <div className="links-list">
            {/* {console.log("@#@#@#__Links 안에 this.props.datas 찍는중__@#@#@#", this.props.datas)} */}
            {this.props.datas.map((data, key) => <LinksEntry data={data} key={key}/>)}
          </div>
        </div> 
      </div>
    );
  }
}

export default Links;


//  링크 - 태그 list (최신추가 가 맨 위로 오게 해서 max 몇개 혹은 스크롤)
// http://mobicon.tistory.com/category/Git%2C%20GitHub    #git #github #개발 #Bootstrap #AngularJS
// pinterest 처럼 예쁘게
// 이 user가 쓰는 태그들 나열하기