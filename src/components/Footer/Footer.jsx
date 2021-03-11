import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className='footer'>
            <div className="nombreClinica"><i className="fas fa-user-md"></i> : DentalGeek, S.L. </div>
            <div className="direccion"><i className="fas fa-map-signs"></i> : C/ Molares, 32. 46017 (Valencia, España) </div>
            <div className="telefono"><i className="fas fa-phone-alt"></i> : 96 357 41 59</div>
            <div className="correo"><i className="far fa-envelope"></i> : info@dentalgeek.com</div>
            <div className="redesSociales">
                <div className="twitter">
                    <img src='../img/twitter.png' alt='twitter'></img>
                </div>
    
                <div className="facebook">
                    <img src='../img/facebook.png' alt='facebook'></img>
                </div>

                <div className="instagram">
                <img src='../img/instagram.png' alt='instagram'></img>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;