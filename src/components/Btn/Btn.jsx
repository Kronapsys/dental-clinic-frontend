import React from 'react';
import './Btn.css';
import {useHistory} from 'react-router-dom';

const Btn = (props) => {

    let history = useHistory();
    
    const direccioname = () => {
        history.push(`/${props.destino}`);
    };

    return(
        <div onClick={direccioname} className="btn">
            {props.nombre}
        </div>
    );
};

export default Btn;