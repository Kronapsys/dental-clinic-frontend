import React from 'react';
import './customerProfile.css';
import logoImg from '../../img/logo2.jpg';

const CustomerProfile = () => {

    let user = JSON.parse(localStorage.getItem('user'));


    return (
            <div className="card">
                <img className="logo" src={logoImg} alt='logo'/>
                    <h1>{user.customer.name} {user.customer.surname}</h1>
                    <p className="title">{user.customer.address}</p>
                    <p>{user.customer.telephone}<i className="fa fa-phone"></i></p>
                    <p>{user.customer.email}<i className="fa fa-envelope"></i></p>

            </div>
    )
};

export default CustomerProfile;