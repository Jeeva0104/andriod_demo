import {
    LOADING
} from "./types";

export const Loading = (value) => {
    return {
        type: LOADING,
        loading: value
    }
}