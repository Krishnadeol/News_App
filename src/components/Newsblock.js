import React,{useState,useEffect} from 'react'
import Newsitem from './Newsitem'


export default function Newsblock() {
//let  API_KEY='';

const[nobj,setn]=useState(null);

const getData= async ()=>{
  setn(null);
  let response= await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=4accf210ea054b77a0c37dc5a7fb1c0c`)
  let res=await response.json();
  setn(res.articles);
}
  
useEffect(()=>{
  getData()
},[])


      return (

    <div className="container">
      <h2 >. .  Burning News Headlines . .</h2>

    <div className="row">     
    {nobj && nobj.map((obj)=>{     
    return  <div className="col-md-4" key={obj.url}>
     <Newsitem  title={obj.title} text={obj.description} goto={obj.url} url={obj.urlToImage} />
     </div>
    })}
      </div>
      </div>     
  )
}
