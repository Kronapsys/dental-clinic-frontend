import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import  checkError  from '../../utils/util'
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavBar from '../../components/Navbar/NavBar';
import { REGISTER } from '../../redux/types/userType';
import { connect } from 'react-redux';


const Register = (props) => {

    const history = useHistory();

    const [dataRegister, setRegister] = useState({
        name: '',
        surname: '',
        address: '',
        telephone: '',
        email: '',
        password: ''
    });

    const [message,setMessage] = useState('');

    const handleState = (event) => {
        setRegister({
            ...dataRegister,
            [event.target.name]:
            event.target.type === "number"
            ? +event.target.value
            : event.target.value,
        });
    };


    const registrame = async () => {

        const body = {
            name: dataRegister.name,
            surname: dataRegister.surname,
            address: dataRegister.address,
            telephone: dataRegister.telephone,
            email: dataRegister.email,
            password: dataRegister.password

        };

        // Control de errores

        setMessage('');
        let errorMessage = checkError(dataRegister);

        setMessage(errorMessage);

        if(errorMessage){
            return;
        }


        let result = await axios.post("http://localhost:3001/signup", body);
        console.log(result);

        props.dispatch({
            type: REGISTER,
            payload: result
        });

        return setTimeout(() => {
            history.push('/logIn')
        }, 1000);
    };

    return(
        <div>
        <Header></Header>
        <NavBar></NavBar>
        <div className='register'>
            <div className="rellenoRegister"></div>
            <div className='formRegister'>
                Nombre: <input className='nameInput' type='text' name='name' title='Name' lenght='30' onChange={handleState}/>
                Apellidos: <input className='surnameInput' type='text' name='surname' title='Surname' lenght='30' onChange={handleState}/>
                Dirección: <input className='addressInput' type='text' name='address' title='Address' lenght='30' onChange={handleState}/>
                Teléfono: <input className='telephoneInput' type='text' name='telephone' title='Telephone' lenght='30' onChange={handleState}/>
                Email: <input className='emailInput' type='email' name='email' title='Email' lenght='30' onChange={handleState}/>
                Password: <input className='passwordInput' type='password' name='password' title='Password' lenght='16' onChange={handleState}/>
                <button className='btnRegister' type='submit' onClick={registrame}>Darme de alta</button>
            <div className='errorMessage'>{message}</div>
            </div>
        </div>
        </div>
    );
};

export default connect()(Register);