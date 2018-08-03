//  링크 - 태그 list (최신추가 가 맨 위로 오게 해서 max 몇개 혹은 스크롤)
// http://mobicon.tistory.com/category/Git%2C%20GitHub    #git #github #개발 #Bootstrap #AngularJS
// pinterest 처럼 예쁘게
// 이 user가 쓰는 태그들 나열하기

import React, { Component } from 'react';

class Links extends Component {
  
  render () {

    return (
      <div>
        <div className="links-form">
          <div className="link-list">
            <div className="link-title">나는 네이버 노예</div>
            <div className="link-url">www.naver.com</div>
            <div className="link-tags">#출근길이고싶다 #생활에궁금한모든것 #사실구글이더갑</div>
          </div>
        </div>
      </div>
    );
  };
}

export default Links

