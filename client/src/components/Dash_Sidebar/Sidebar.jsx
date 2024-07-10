import React from 'react'
import "./Sidebar.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"


const Sidebar = () => {
  return (
    <div className='container' style={{backgroundColor:"#dfe4ea", paddingLeft:"70px", paddingRight:"20px", height:"100vh", position:"sticky", top:"0"}}>
      <ul>
        <li>
            <Link to="userlist" style={{textDecoration:"none", color:"black"}}>
            <span>Users</span>
            </Link>
        </li>
        <li>
            <Link to="postlist" style={{textDecoration:"none",  color:"black"}}>
            <span>Posts</span>
            </Link>
        </li>
        <li>
            <Link to="storylist" style={{textDecoration:"none", color:"black"}}>
            <span>Stories</span>
            </Link>
        </li>
        <li>
            <Link to="commentlist" style={{textDecoration:"none", color:"black"}}>
            <span>Comments</span>
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
