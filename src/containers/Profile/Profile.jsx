import React from 'react';
import './Profile.css';
import CustomerProfile from '../../components/customerProfile/customerProfile';

const Profile = () => {

    return(
        <div>
            <div className='profile'>
                <CustomerProfile />
            </div>
        </div>
        
    );
};

export default Profile;