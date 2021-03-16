import React from 'react';
import './Header.css';
import Btn from '../../components/Btn/Btn';
import {useHistory} from 'react-router-dom';


const Header = () => {

    let history = useHistory();
    let user = JSON.parse(localStorage.getItem('user'));

    //Función logout
    // const logout = () => {

    //     localStorage.clear();
    //     history.push('/');
    // }

    const direccioname = () => {
        history.push(`/`);
    };

    return (
        <div className='header'>

            <div className='bannerHeader' >
                <img src='../img/banner.png' alt='banner' onClick={direccioname}/>
            </div>

            {
                localStorage.getItem('user')
                    ?

                    <>
                        <div className='btnGroup'>
                            <Btn nombre={user.customer.name} destino='profile' />
                            <Btn nombre='Log Out' destino='' onClick={direccioname} />

                            {/* Antiguo boton log out */}
                            {/* <button className='btn-logout' onClick={logout}>Logout</button> */}


                        </div>
                    </>

                    :

                    <>
                        <div className='btnGroup'>
                            <Btn nombre='Entrar' destino='logIn' />
                            <Btn nombre='Registrate' destino='register' />
                        </div>
                    </>

            }

        </div>

    );
};

export default Header;