import React from 'react'
import "./Body.scss";

const Body = () => {
  return (
    <div className='container' style={{marginTop:"40px", display:"flex"}}>

        <div className='box'  style={{width:"300px", height:"150px", backgroundColor:"#e74c3c", borderRadius:"10px", display:"flex",alignItems:"center",justifyContent:"center", marginRight:"10px"}}>
            <span style={{color:"white", fontWeight:"bold"}}>Total Users</span>
        </div>

        <div className='box'  style={{width:"300px", height:"150px", backgroundColor:"#27ae60", borderRadius:"10px", display:"flex",alignItems:"center",justifyContent:"center", marginRight:"10px"}}>
            <span style={{color:"white", fontWeight:"bold"}}>Total Posts</span>
        </div>

        <div className='box'  style={{width:"300px", height:"150px", backgroundColor:"#70a1ff", borderRadius:"10px", display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span style={{color:"white", fontWeight:"bold"}}>Total Comments</span>
        </div>

    </div>
  )
}

export default Body
