import React from 'react';
import './Profile.css';
import Header from '../../components/Header/Header';
import NavBar from '../../components/Navbar/NavBar';
import CustomerProfile from '../../components/customerProfile/customerProfile';

const Profile = () => {

    return(
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className='profile'>
                <CustomerProfile />
            </div>
        </div>
        
    );
};

export default Profile;