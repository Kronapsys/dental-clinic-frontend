import React, { useEffect } from "react";
import "./AdminProfile.css";
import CustomerProfile from "../../components/customerProfile/customerProfile";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {GET_APPOINTMENT,DELETE_APPOINTMENT} from "../../redux/types/appointmentType.js";
import Moment from "react-moment";
import "moment/locale/es";

  const AdminProfile = (props) => {
    let history = useHistory();

  const direccioname = () => {
    history.push(`/appointment`);
  };

  const getAllAppointments = async () => {
    let result = await axios.get(
      `http://localhost:3001/appointments/`,
      { headers: { Authorization: `Bearer ${props.user.token}` } }
    );
    // console.log(result.data)
    props.dispatch({ type: GET_APPOINTMENT, payload: result.data });
  };

  useEffect(() => {
    getAllAppointments();
  }, []);


  const deleteAppointment = async (id) => {
    let result = await axios.delete(
      `http://localhost:3001/appointments/${id}`,
      { headers: { Authorization: `Bearer ${props.user.token}` } }
    );
    props.dispatch({ type: DELETE_APPOINTMENT, payload: result.data });
    console.log(result);
    getAllAppointments();
  };


  if (props.user?.token) {
    return (
      <div className="adminProfile">
        
        <div className="visorCitas">
          {props.appointment[0] === undefined
          ?
          (
            <>
              <div className="cardCita"><p className="noCitas">NO HAY CLIENTES CON CITAS ACTUALMENTE</p></div>
            </>
          )
          :
          (
            <>
              <div>
                {props.appointment.map((appointment) => {
                  return (
                    <div className="cardCita" key={appointment.id}>
                      <div className="fechaCita">
                        <Moment format="D MMMM YYYY" locale="es">
                            {appointment.date}
                        </Moment>
                      </div>
                      <div className="descripcionCita">
                            {appointment.description}
                      </div>
                      <div className="customerId">
                            Customer ID: {appointment.customerId}
                      </div>
                      <div className="deleteCita">
                        <i
                          className="fas fa-ban"
                          onClick={ ()=> deleteAppointment(appointment.id)}
                        ></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    appointment: state.appointmentReducer.appointment
  }
};

// const mapDispatchToProps = dispatch => ({
//   deleteAppointment: id => dispatch(DELETE_APPOINTMENT(id))
// })

export default connect(mapStateToProps)(AdminProfile);