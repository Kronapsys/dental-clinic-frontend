import React, { useState } from "react";
import "./LogIn.css";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import  checkError  from '../../utils/util';
import {LOGIN} from '../../redux/types/userType.js';
import {connect} from 'react-redux';

const Login = (props) => {

    let history = useHistory();

    const [dataLogin, setLogin] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState('');

    // Manejadores
    const handleState = (event) => {
        setLogin({
            ...dataLogin,
            [event.target.name]:
                event.target.type === "number"
                    ? +event.target.value
                    : event.target.value,
        });
    };

    // useEffect(() => { }, []);

        const logeame = async () => {

        // Comprobación errores

        setMessage('');

        let errorMessage = checkError(dataLogin);
        setMessage(errorMessage);
        // console.log(errorMessage);
        if(errorMessage) {
            return;
        }

        let result = await axios.post("http://localhost:3001/signin", dataLogin);
        props.dispatch({type: LOGIN, payload: result.data});
        history.push(`/`);
        console.log(result.data);
    };

    // <pre>{JSON.stringify(dataLogin, null,2)}</pre>
    return (
        <div>

        <div className="login">

            <div className="rellenoLogin"></div>
            <div className='formLogIn'>
                Email: <input className='emailInput' type='email' name='email' title='Email' lenght='30' onChange={handleState} />
                Password: <input className='passwordInput' type='password' name='password' title='Password' lenght='16' onChange={handleState} />
                <button className='btnEntrar' type='submit' onClick={logeame}>Entrar</button>

                <div className='errorMsg'>{message}</div>
            </div>
        </div>
        </div>
    );
};

export default connect()(Login);