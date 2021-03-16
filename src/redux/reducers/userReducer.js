import {LOGIN, LOGOUT} from '../types/userType.js';

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

        default : 
            return state
    }
}

export default userReducer;