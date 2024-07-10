import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./dashboard.scss"
import Navbar from '../../components/Dash_Navbar/Navbar';
import Sidebar from '../../components/Dash_Sidebar/Sidebar';
import Body from '../../components/Dash_Body/Body';
import { Route, Routes } from 'react-router-dom';
import Userlist from '../Users/Userlist';
import Userupdate from '../Users/Userupdate'


const Dashboard = () => {
    return (
        <div>
            <Navbar/>

            <div style={{display:"flex"}}>
                <div>
                    <Sidebar/>
                </div>
                <div>
                    <Body/>
                    <Routes>
                        <Route path="/userlist" element={<Userlist/>}/>
                        <Route path="/userlist/userupdate" element={<Userupdate/>}/>

                        {/* <Route path="/postlist" element={<Postlist/>}/>
                        <Route path="/postlist/postupdate" element={<Postupdate/>}/>

                        <Route path="/storylist" element={<Storylist/>}/>
                        <Route path="/storylist/storyupdate" element={<Storyupdate/>}/>

                        <Route path="/commentlist" element={<Commentlist/>}/>
                        <Route path="/commentlist/commentupdate" element={<Commentupdate/>}/> */}
                    </Routes>
                </div>
            </div>
            
        </div>
        
    );
};

export default Dashboard;