import React from 'react'
export default function Newsitem(props) {
  
      return (
    <div>
      <div className="card m-2 border-warning" style={{width: "18rem"}}>
<img src={props.url?props.url:"www.amazon.co.in"} className="card-img-top" alt="Not avaible"/>
<div className="card-body ">
  <h5 className="card-title">{props.title?props.title:"Not available"}</h5>
  <p className="card-text">{props.text?props.text:"Not available"}</p>
  <a href={props.goto?props.goto:"www.amazon.co.in"} className="btn btn-warning">Explore</a>
</div>
</div>
    </div>
  )
}
