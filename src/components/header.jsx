import React from "react";
export function Header({children,tooglethepage}){
return(
    <nav style={{ 
  backgroundColor: "#c59771bd", 
  padding: "16px 32px", 
  textAlign: "center", 
  color: "white" 
}}>
  <div style={{ position: "relative", height: "50px" }}>
    
    
    <h1 style={{ 
      margin: 0, 
      position: "absolute", 
      left: "50%", 
      top:"25%",
      transform: "translateX(-50%)", 
      fontSize: "24px", 
    
        
    }}>
      {children}
    </h1>

    
    <button style={{ 
      position: "absolute", 
      right: 0, 
      top: "50%", 
      transform: "translateY(-50%)",
      backgroundColor: "#815e44",
      color: "white",
      border: "none",
      padding: "8px 16px",
      borderRadius: "8px",
      cursor: "pointer",
     
    }} onClick={tooglethepage}>
      Home
    </button>
  </div>
</nav>
)
}