import React, { Component } from 'react';
import LinksEntry from './03_3_links-entry';
import LinksFilter from './03_2_links-filter';

class Links extends Component {
  state = {
    sortBy: 'new',
    selectedItem: '',
    query: ''
  }

  render() {
    return (
      <div className="links-filter-list">
        <div className="links-filter-list-inner">
          <div className="links-filter">
            {/* {this.props.tags.map(tag =><label><input type="checkbox" name="tag" value={tag} />{tag}</label>)} */}
            <div className="radio">
              <label><input type="radio" name="sort" value="최신순" />최신순</label>
              <label><input type="radio" name="sort" value="인기순" />인기순</label>
            </div>
            <div>
              {/* {this.props.tagsWithNum.map(tagN =><label><input type="checkbox" name="tag" value={tagN} />{tagN}</label>)} */}
              {this.props.tagsWithNum.map((tagN, index) => <LinksFilter tagN={tagN} key={index}/>)}
            </div>
          </div>

          <div className="links-list">
            {/* {console.log("@#@#@#__Links 안에 this.props.datas 찍는중__@#@#@#", this.props.datas)} */}
            {this.props.datas.map((data, index) => <LinksEntry data={data} key={index}/>)}
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