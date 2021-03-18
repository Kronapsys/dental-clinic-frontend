import {ADD_APPOINTMENT} from '../types/appointmentType.js';

const initialState = {
    appointment : {}
};

const appointmentReducer = (state = initialState, action) => {
    switch(action.type){

        case ADD_APPOINTMENT :
            return {
                ...state,
                appointment : action.payload
            }

        default :
            return state
    }
}

export default appointmentReducer;