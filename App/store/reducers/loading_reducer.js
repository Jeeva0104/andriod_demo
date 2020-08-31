import {
    LOADING, LOGOUT
} from "../actions/types";
const initialState = {
    isLoading: false
}

export const Loading = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.loading,
            }
        case LOGOUT:
            return {}
        default:
            return state;
    }
}
