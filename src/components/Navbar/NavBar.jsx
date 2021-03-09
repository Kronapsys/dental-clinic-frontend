import React from 'react';
import './NavBar.css';
import Boton from '../../components/Btn/Btn';

const NavBar = () => {
    return(
        <div className='navBar'>
            <Boton nombre='Nuestro equipo' destino='Staff'/>
            <Boton nombre='Instalaciones' destino='Facilities'/>
            <Boton nombre='Sobre nosotros' destino='AboutUs'/>
        </div>
    );
};

export default NavBar;