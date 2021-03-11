import React, { useState, useEffect } from "react";
import "./LogIn.css";
import axios from "axios";

const Login = () => {
  const [dataLogin, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleState = (event) => {
    setLogin({
      ...dataLogin,
      [event.target.name]:
        event.target.type === "number"
          ? +event.target.value
          : event.target.value,
    });
  };

  useEffect(() => {}, []);

  const logeame = async () => {
    let result = await axios.post("http://localhost:3001/signin", dataLogin);
    localStorage.setItem("miObjeto", JSON.stringify(result.data));
    console.log(result);
  };

  return (
    <div className="login">
      {/* <div className='formLogIn'>
                Email: <input className='emailInput' type='email' name='email' title='Email' lenght='30' onChange={handleState}/>
                Password: <input className='passwordInput' type='password' name='password' title='Password' lenght='16' onChange={handleState}/>
                <button className='btnEntrar' type='submit' onClick={logeame}>Entrar</button>
            </div> */}
     
    </div>
  );
};

export default Login;
