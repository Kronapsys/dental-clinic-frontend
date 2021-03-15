import React from 'react';
import './customerProfile.css';
import logoImg from '../../img/profile_card.png';

const CustomerProfile = () => {

    let user = JSON.parse(localStorage.getItem('user'));


    return (
            <div className="cardCustomer">
                <div className="card">
                    <img className="logo" src={logoImg} alt='logo'/>
                    <h1> {user.customer.name} {user.customer.surname} </h1>
                    <p> <i className="fas fa-map-signs"> </i> : {user.customer.address} </p>
                    <p> <i className="fas fa-phone-alt"> </i> : {user.customer.telephone} </p>
                    <p> <i className="fa fa-envelope"> </i> : {user.customer.email} </p>
                </div>
            </div>
    )
};

export default CustomerProfile;