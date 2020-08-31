import {
    AsyncStorage
} from 'react-native';
import {
    COUNTER_ADD,
    COUNTER_SUBTRACT,
    USER_DETAILS,
    VALIDATION_ERROR,
    SERVER_ERROR,
    UNAUTHORIZED,
    LOGOUT,
    LOADING
} from "./types";
import { Loading } from './common'
import API from '../../API/routes'

const apiRequest = async (params) => {
    try {
        let res = await API.login(params)
        if (res.status >= 200 && res.status < 300) {
            res = await res.json()
            const { data: {
                data: {
                    token, user
                }
            } } = res
            await AsyncStorage.setItem("USER_DATA", JSON.stringify(user))
            await AsyncStorage.setItem("AUTH_KEY", token)
            return {
                type: USER_DETAILS,
                user
            }
        } else if (res.status === 422) {
            res = await res.json()
            const {
                errors
            } = res
            return {
                type: VALIDATION_ERROR,
                errors
            }
        } else if (res.status === 401) {
            res = await res.json()
            const {
                errors
            } = res
            return {
                type: UNAUTHORIZED,
                errors
            }
        }
        else {
            let error = await res.json()
            return {
                type: SERVER_ERROR,
                error
            }
        }

    } catch (e) {
        console.error(e)
        return {
            type: SERVER_ERROR,
            error: {
                "message": "Server Error"
            }
        }
    }

}
export const counterAdd = () => {
    return {
        type: COUNTER_ADD
    };
}

export const counterSubtract = () => {
    return {
        type: COUNTER_SUBTRACT
    };
}



export const userLogin = (params) => async (dispatch) => {
    dispatch(Loading(true))
    const obj = await apiRequest(params)
    dispatch(obj)
    dispatch(Loading(false))
}

export const userLogout = (navigation) => async (dispatch) => {
    await AsyncStorage.removeItem("AUTH_KEY");
    await AsyncStorage.removeItem("USER_DATA");
    let obj = {
        type: LOGOUT,
        navigation: navigation
    }
    dispatch(obj)
}