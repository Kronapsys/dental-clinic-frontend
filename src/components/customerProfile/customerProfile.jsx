import React from 'react';
import './customerProfile.css';
import logoImg from '../../img/profile_card.png';
import { connect } from "react-redux";

const CustomerProfile = (props) => {

    return (
        <div className="cardCustomer">
            <div className="card">
                <img className="logo" src={logoImg} alt='logo' />
                <h1> {props.user?.customer.name} {props.user?.customer.surname} </h1>
                <p> <i className="fas fa-map-signs"> </i> : {props.user?.customer.address} </p>
                <p> <i className="fas fa-phone-alt"> </i> : {props.user?.customer.telephone} </p>
                <p> <i className="fa fa-envelope"> </i> : {props.user?.customer.email} </p>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
};

export default connect(mapStateToProps)(CustomerProfile);