import { useState } from 'react'

import { PostComponent } from './post';


function App() {
 const[posts,addnewpost]=useState([]);
  
const Arrycompnents=posts.map(post=><PostComponent
  name={post.name}
  subtitle={post.subtitle}
  time={post.time}
  image={post.image}
  description={post.description}
  />
);

function addpost(){
  addnewpost([...posts,{
     name:"Jaideep",
    subtitle:"I am a student", 
    time :"3.00",
     image:"https://wallpapers.com/images/high/satoru-gojo-cool-boy-anime-yqn8m7cxxhuccwwo.webp", 
     description:"I want to be disciplined and be stronger and powerful for the things i have and for the things i have lost",
  }])
    
  
}
  return (
    <div style={{minHeight:'100vh',background:'#dfe6e9'}}>
      <button onClick={addpost}>Add Post</button>
      <div style={{display:'flex', justifyContent:'center'}}>
        <div>{Arrycompnents}</div>
      </div>
    </div>
    
  )
}
const Togglemessages = ()=>{
  console.log("re-render");
  const[visible,setvisible]=useState(true);
return (
  <div style={{fontSize:30}}>
    <button onClick={()=>{setvisible(!visible)}}>Toggle the value</button>
    {visible&&<p>This text is conditonally renderd</p>}
  </div>
);
};
const Counter=()=>{
  const[countno,setcount]=useState(0);
  function increament(){
    setcount(countno+1);
  }
  return(
    <div>
      <button onClick={increament}>increament number</button>
      {countno}
    </div>
  )
}


export default App
