import { Outlet } from 'react-router-dom';
import Navbar from '../components/Dash_Navbar/Navbar';
import Sidebar from '../components/Dash_Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Userlist from '../pages/Users/Userlist';
import Userupdate from '../pages/Users/Userupdate';
import Body from '../components/Dash_Body/Body';

const DashboardLayout = () => {
    return (
        <div>
        <Navbar/>

        <div style={{display:"flex"}}>
            <div>
                <Sidebar/>
            </div>
            <div>
                {/* <Outlet/> */}
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

export default DashboardLayout;