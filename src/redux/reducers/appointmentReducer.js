import {ADD_APPOINTMENT, GET_APPOINTMENT, DELETE_APPOINTMENT} from '../types/appointmentType.js';

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
        case GET_APPOINTMENT :
            return {
                ...state,
                appointment : action.payload
            }
        case DELETE_APPOINTMENT :
            return {
                ...state,
                appointment : action.payload
            }

        default :
            return state
    }
}

export default appointmentReducer;