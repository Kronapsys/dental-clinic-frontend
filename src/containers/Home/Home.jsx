import React from 'react';
import './Home.css';

const Home = () => {
    
    return(
        <div className='home'>
           <div className="homeHorario">
            <label className='lblHorario'>HORARIO:</label> <br/>
            <label className='lblDias'>L: 09:00 a 18:00</label>
            <label className='lblDias'>M: 09:00 a 18:00</label>
            <label className='lblDias'>X: 09:00 a 18:00</label>
            <label className='lblDias'>J: 09:00 a 18:00</label>
            <label className='lblDias'>V: 09:00 a 14:00</label>
            <label className='lblDias'>S: 10:00 a 13:00</label>
            
           </div>

           <div className="homeServicios">
               
           </div>
        </div>
    );
};

export default Home;