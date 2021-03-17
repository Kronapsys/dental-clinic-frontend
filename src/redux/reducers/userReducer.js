import {LOGIN, LOGOUT, REGISTER, ADD_APPOINTMENT} from '../types/userType.js';

const initialState = {
    user : {}
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN :
            return {
                ...state,
                user : action.payload
            }
        case LOGOUT :
            return {
                ...state,
                user : action.payload
            }
        case REGISTER :
            return {
                ...state,
                user : action.payload
            }
        case ADD_APPOINTMENT :
            return {
                ...state,
                user : action.payload
            }

        default :
            return state
    }
}

export default userReducer;