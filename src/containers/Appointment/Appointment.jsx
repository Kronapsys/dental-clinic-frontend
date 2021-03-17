import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { ADD_APPOINTMENT } from '../../redux/types/userType.js';
import './Appointment.css';


const Appointment = (props) => {

    // let history = useHistory();

    const [dataAppointment, setAppointment] = useState({
        date: "",
        description: "",
        customerId: ""
    });

    // Manejadores
    const handleState = (event) => {
        setAppointment({
            ...dataAppointment,
            [event.target.name]:
                event.target.type === "number"
                    ? +event.target.value
                    : event.target.value,
        });
    };

    const createAppointment = async () => {

        const body = {
            date: dataAppointment.date,
            description: dataAppointment.description,
            customerId: dataAppointment.customerId


        };


        let result = await axios.post("http://localhost:3001/appointments", body);
        props.dispatch({ type: ADD_APPOINTMENT, payload: result.data });
        console.log(result.data);

    }



    return (
        <div className="appointment">

            <div className="rellenoLogin"></div>
            <div className='formLogIn'>
                Fecha: <input className='emailInput' type='date' name='date' title='Date'  onChange={handleState} />
                Descripcion: <input className='passwordInput' type='text' name='description' title='Description' lenght='50' onChange={handleState} />
                <button className='btnEntrar' type='submit' onClick={createAppointment}>PEDIR CITA</button>

            </div>
        </div>
    )


};










export default connect()(Appointment);
