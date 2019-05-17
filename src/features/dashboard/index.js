import React from 'react';
import Navbar from '../../sharedComponents/Navbar';
import ProfileCard from './components/ProfileCard';
import CardsContainer from './components/CardsContainer';
import '../../main.css';

const Dashboard = () => {
    return (
        <>
            <Navbar/>
            <div id="bodyRow" className="row block">
                <ProfileCard/>
                <CardsContainer/>
            </div>
        </>
    )
}

export default Dashboard;