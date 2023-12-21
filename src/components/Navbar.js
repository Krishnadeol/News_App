import React from 'react'

export default function Navbar() {
  return ( 
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top " >
        <span></span>
<div className="container-fluid " >
  <a className="navbar-brand" href="/" style={{color:"orange"}}>News App</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active"  style={{color:"orange"}} aria-current="page" href="/">About</a>
      </li>
      </ul>
     <button  style={{color:"orange",backgroundColor:"black"}}>mode</button>
  </div>

</div>
</nav>
</div>

);
}
