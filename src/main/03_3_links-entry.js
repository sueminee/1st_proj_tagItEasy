

import React from 'react';


const LinksEntry = (props) => {
  const clickCounter = (a) => {
    console.log("랄랄라", a)
    window.open(a.url, "_blank")
    //window.location.href = a (그창에서 열림.)
    // const url = e.target.value
    // console.log("clickCounter 에서 url: ", url)

    // const target = e.target
    // window.open(e.target.innerHTML, "_blank")
    // console.log("clickCounter 에서 발생하는 e.target", target);

    // console.log("clickCounter 에서 data", data);
  
    let query = `http://localhost:8080/urls/click/${a._id}`
    console.log("clickCounter 함수 fetch 전 query", query)

    fetch(query, {
      method : 'POST',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type' : 'application/json',
        'Authorization' : window.localStorage.token
      },
      body:JSON.stringify({post:'post'})
    })
    .then((res) => res.json())
    .then((data) => console.log('clickCounter 함수에서 POST 후 response로 받는 data : ', data))
    .catch((err) => console.log('clickCounter fetch err : ', err))
   }

  return(
    <div className="urls-form">

      <div className="link-list" onClick={() => {clickCounter(props.data)}} >
        <div className="link-title">{props.data.description}{props.data.id}</div>
        {/* <div className="link-url"><a href={props.data.url} onClick={(e) => this.clickCounter(e)}></a></div> */}
        {/* <div className="link-url" value={props.data.url} onClick={(e) => {clickCounter(e)}} >{props.data.url}</div> */}
        <div className="link-url">{props.data.url}</div>
      </div>
      <div className="tags-form">
        <div className="link-tags"># {props.data.tag[0]}</div>
        {props.data.tag[1] ? <div className="link-tags"># {props.data.tag[1]}</div> : null}
        {props.data.tag[2] ? <div className="link-tags"># {props.data.tag[2]}</div> : null}
      </div>
    </div>
  )
}

export default LinksEntry;