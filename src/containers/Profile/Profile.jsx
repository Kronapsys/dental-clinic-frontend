import React from 'react';
import './Profile.css';
import CustomerProfile from '../../components/customerProfile/customerProfile';
import { connect } from "react-redux";

const Profile = (props) => {

    return (
        <div className='profile'>
            <div >
                <CustomerProfile />
            </div>

            <div className="visorCitas">
                <div className="cardCita">
                    <div className="fechaCita"> 18-03-2021</div>
                    <div className="descripcionCita"><p>Extracción muela del juicio</p></div>
                    <div className="deleteCita"><i className="fas fa-ban"></i></div>
                </div>
            </div>
            <div className="botonCita">
                    <button className="btnCita">PEDIR CITA</button>
                </div>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
};

export default connect(mapStateToProps)(Profile);