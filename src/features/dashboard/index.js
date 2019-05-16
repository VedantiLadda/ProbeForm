import React from 'react';
import Navbar from '../../sharedComponents/Navbar';
import '../../main.css';
import ProfileCard from './components/Profile Card/ProfileCard';
const Dashboard = () => {
    return (
        <>
            <Navbar/>
            <div id="bodyRow" className="row block">
                <ProfileCard/>
            </div>
        </>
    )
}

export default Dashboard;