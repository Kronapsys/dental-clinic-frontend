import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className='footer'>
            <div className="nombreClinica"> DentalGeek, S.L. </div>
            <div className="direccion"> C/ Molares, 32. 46017 (Valencia, España) </div>
            <div className="telefono">Telf: 96 357 41 59</div>
            <div className="correo">e-mail: info@dentalgeek.com</div>
            <div className="redesSociales">
                <div className="twitter">
                    <img src='../img/twitter.png'></img>
                </div>
    
                <div className="facebook">
                    <img src='../img/facebook.png'></img>
                </div>

                <div className="instagram">
                <img src='../img/instagram.png'></img>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;