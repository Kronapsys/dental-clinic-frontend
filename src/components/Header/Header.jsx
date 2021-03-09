import React from 'react';
import './Header.css';
import Boton from '../../components/Btn/Btn';


const Header = () => {
    return (
        <div className='header'>

            <div className='bannerHeader'>
                <img src='../img/banner.png' alt='banner'/>
            </div>

            <div className='btnGroup'>
                <Boton nombre="Entrar" destino="logIn"/>
                <Boton nombre="Registrate" destino="register"/>  
            </div>
                    
            
            
        </div>
    );
};

export default Header;