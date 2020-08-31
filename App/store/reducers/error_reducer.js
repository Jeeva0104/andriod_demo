import { VALIDATION_ERROR, SERVER_ERROR, UNAUTHORIZED, LOGOUT } from "../actions/types";

export const errorHandler = (state = {}, action) => {
    switch (action.type) {
        case VALIDATION_ERROR:
            return {
                ...state,
                error: action.errors
            }
        case SERVER_ERROR:
            return {
                ...state,
                error: action.errors
            }
        case UNAUTHORIZED:
            return {
                ...state,
                error: action.errors
            }
        case LOGOUT:
            return {}
        default:
            return state;
    }
}