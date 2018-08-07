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
      <div className="links-filter-list-inner">
        <div className="links-filter">
          <div className="radio">
              <label><input type="radio" name="sort" value="최신순" />최신순</label>
              <label><input type="radio" name="sort" value="인기순" />인기순</label>
          </div>
          <div className="tags-list">
            {/* {this.props.tagsWithNum.map(tagN =><label><input type="checkbox" name="tag" value={tagN} />{tagN}</label>)} */}
            {this.props.tagsWithNum.map((tagN, index) => <LinksFilter tagN={tagN} key={index}/>)}
          </div>
          <div className="filter-button"> 
            <button className="clear-check-btn">체크해체</button>
            <button className="apply-check-btn">적용</button>
          </div>
        </div>

        <div className="links-list">
          {/* {console.log("Links의 datas: ", this.props.datas)} */}
          {this.props.datas.map((data, index) => <LinksEntry data={data} key={index}/>)}
        </div>
      </div>
    );
  }
}

export default Links;