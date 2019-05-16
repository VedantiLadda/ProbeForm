import React from 'react';
import Navbar from '../../sharedComponents/Navbar';
import ProfileCard from './components/ProfileCard';
import '../../main.css';
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