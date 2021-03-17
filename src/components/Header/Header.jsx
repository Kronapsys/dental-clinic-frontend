import React from "react";
import "./Header.css";
import Btn from "../../components/Btn/Btn";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { LOGOUT } from "../../redux/types/userType.js";

const Header = (props) => {
    let history = useHistory();

    //Función logout
    const logOut = () => {
        //procedemos a borrar los datos de usuario de RDX y así conseguiremos el logOut
        props.dispatch({ type: LOGOUT, payload: {} });
        history.push("/");
    };

    const direccioname = () => {
        history.push(`/`);
    };

    if (props.user?.token) {
        return (
            <div className="header">

                <div className="bannerHeader">
                    <img src="../img/banner.png" alt="banner" onClick={direccioname} />
                </div>

                <div className="btnGroup">
                    <p className="saludo">Hola, </p><Btn nombre={props.user?.customer.name} destino="profile" />
                    <i className="fas fa-sign-out-alt fa-2x" onClick={logOut}></i>
                </div>

            </div>
        )
    } else {
        return (
            <div className="header">

                <div className="bannerHeader">
                    <img src="../img/banner.png" alt="banner" onClick={direccioname} />
                </div>

                <div className="btnGroup">
                    <Btn nombre="Entrar" destino="logIn" />
                    <Btn nombre="Registrate" destino="register" />
                </div>

            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
};

export default connect(mapStateToProps)(Header);