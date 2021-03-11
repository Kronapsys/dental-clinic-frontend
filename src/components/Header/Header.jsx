import React from 'react';
import './Header.css';
import Btn from '../../components/Btn/Btn';
import {useHistory} from 'react-router-dom';


const Header = () => {

    let history = useHistory();

    const direccioname = () => {
        history.push(`/`);
    };

    return (
        <div className='header'>

            <div className='bannerHeader' >
                <img src='../img/banner.png' alt='banner' onClick={direccioname}/>
            </div>

            <div className='btnGroup'>
                <Btn nombre='Entrar' destino='logIn'/>
                <Btn nombre='Registrate' destino='register'/>  
            </div> 
                        
        </div>
        
    );
};

export default Header;