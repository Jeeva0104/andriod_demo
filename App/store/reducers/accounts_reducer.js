import {
    USER_DETAILS,
    LOGOUT
} from "../actions/types";
const initialState = {
    isAuthenticated: false
}

export const userAccounts = (state = initialState, action) => {
    switch (action.type) {
        case USER_DETAILS:
            return {
                ...state,
                isAuthenticated: true,
                userDetails: action.user
            }
        case LOGOUT:
            action.navigation.navigate('Login')
            return {}
        default:
            return state;
    }
}
