import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <div style={{background:'#dfe6e9',height:'100vh',alignContent:'center'}}>
    <div style={{display:'flex',justifyContent:'center'}}>
      <div><div> <Postcomponenet
      name={'cristiano ronaldo'}
      followercount={'30 m followers'}
      caption={'I love discipline'}
      des={'Secret to my sucsses is my unrelentless discipline and hardwork i practice daily review my self and try to improve my self again and again to be the best version of my self'}
      img={"https://static.independent.co.uk/2025/06/26/07/eb250250fd4944939d959f5e1f61c39dY29udGVudHNlYXJjaGFwaSwxNzUxMDA0OTQ3-2.80547249.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp"}/></div>
         
         <div> <Postcomponenet
      name={'garou'}
      followercount={'100 m followers'}
      caption={'Never Give Up'}
      des={'The popular kid always beats up the unpopular kid i cannot be killed if all others wants i cannot accept it i will be stronger then all of them and write my own story'}
      img={"https://wallpapers.com/images/featured-full/garou-q1flyzj5yv0kfyzb.jpgp"}/></div>
      <div> <Postcomponenet
      name={'madara'}
      followercount={'1000 m followers'}
      caption={'The Ghost of the uchiha'}
      des={'love is not the true necessity but power is the only thing that matters in this world if you are strong you will conquere ever thing but if you are not you will not have any thing in this world '}
      img={"https://wallpapers.com/images/featured-full/madara-uchiha-masx429i1brg3bbr.jpg"}/></div>
         </div>
         


         

    </div>
 
  </div>
}
function Postcomponenet({name,followercount,caption,des,img}){
  return <div style={{width:250,backgroundColor:'gray',borderWidth:2,borderRadius:8,margin:20}}>
    <div style={{display:'flex',padding:2}}>
  <div>
   <img src={img}
   style={{
    width:30,
    height:30,
    borderRadius:30
   }}/>
  </div>
  <div style={{fontSize:8,alignContent:'center',padding:3}}>
    <div><b>{name}</b></div>
    <div>{followercount}</div>
    <div>{caption}</div>
  </div>
  <br />
  </div>
  <div style={{fontSize:10,alignContent:'center',paddingRight:10,paddingLeft:10,paddingBottom:10}} >{des}</div>
  </div>
}

export default App
