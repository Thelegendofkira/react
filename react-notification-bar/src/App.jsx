import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setcount]=useState(0);
  const [data,setdata]=useState({});

useEffect(function(){
const interval=setInterval(increasecount,1000);
return ()=>clearInterval(interval);
},[])
function increasecount(){
setcount(prev=>prev+1);
}
const [colortab,setcolortab]=useState(1);
useEffect(function(){
fetch("https://jsonplaceholder.typicode.com/todos/"+colortab).then(async res=>{
  const json=await res.json();
 setdata(json);
})
},[colortab])



  return (
   <>
   <button onClick={function(){
    setcolortab(1);
   }} style={{color:(colortab==1)?"red":"white"} }>#Todo 1</button>
   <button onClick={function(){
    setcolortab(2);
   }} style={{color:(colortab==2)?"red":"white"}}>#Todo 2</button>
   <button onClick={function(){
    setcolortab(3);
   }} style={{color:(colortab==3)?"red":"white"}}>#Todo 3</button>
   <button onClick={function(){
    setcolortab(4);
   }} style={{color:(colortab==4)?"red":"white"}}>#Todo 4</button>
   <br />
   {count}
   <br />
   {data.title}
   </>
   
    
    

   
  )
}

export default App
