import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom'


const Userlist = () => {
    const navigate = useNavigate();
  return (
    <>
    
    <div style={{padding:"40px 20px"}}>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Name</th>
            <th scope="col">CoverPic</th>
            <th scope="col">ProfilePic</th>
            <th scope="col">City</th>
            <th scope="col">Website</th>
            <th>Action</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>

            <td>
            <button onClick={()=>navigate("userupdate")} className="btn btn-success" >Update</button>
            </td>
            <td>
            <button className="btn btn-danger" >Delete</button>
            </td>
           
            </tr>
        </tbody>
        </table>

    </div>
    </>
  )
}

export default Userlist;
