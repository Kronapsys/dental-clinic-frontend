import React, { useState, useEffect } from 'react';
import './Register.css';
import axios from 'axios';

const Register = () => {

    const [dataRegister, setRegister] = useState({
        name: '',
        surname: '',
        address: '',
        telephone: '',
        email: '',
        password: ''
    });

    const handleState = (event) => {
        setRegister({
            ...dataRegister,
            [event.target.name]:
            event.target.type === "number"
            ? +event.target.value
            : event.target.value,
        });
    };

    useEffect(() => {}, []);

    const registrame = async () => {
        let result = await axios.post("http://localhost:3001/signup", dataRegister);
        console.log(result);
    };

    return(
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
            </div>
        </div>
    );
};

export default Register;