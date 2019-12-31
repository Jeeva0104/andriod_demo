import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    Button,
    AsyncStorage
} from 'react-native';
// import { USER_KEY } from './config'
import Login from '../components/Login'
import OTPPage from '../components/Otp'
import APis from '../Api/routes'
export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.dummyOTP = ''
        this.state = {
            showOTPPage: false,
            mobileNumber: '',
            otp: ''
        }
    }
    async componentDidMount() {
        try {
            let checkForLogin = await AsyncStorage.getItem("AUTH_KEY")
            if (checkForLogin) {
                let userData = await AsyncStorage.getItem("USER_DATA")
                this.props.navigation.navigate('List',{"userid":userData})
            }
        } catch (err) {
            alert('something went wrong')
        }
    }
    _hanleSubmitOTP = async () => {
        console.log(this.state.otp == this.dummyOTP, this.state.otp, this.dummyOTP)
        try {

            if (this.state.otp == this.dummyOTP) {
                let obj = {
                    mobile: this.state.mobileNumber,
                    tokenkey: this.state.loginData.tokenkey,
                    otp: parseInt(this.state.otp),
                    userid: parseInt(this.state.loginData.userid)
                }
                let res = await APis.loginApi(obj)
                if (res.status >= 200 && res.status < 300) {
                    res = await res.json()
                    delete obj.otp
                    await AsyncStorage.setItem("AUTH_KEY", res.data.authToken)
                    await AsyncStorage.setItem("USER_DATA",obj.userid.toString() )
                    this.setState({
                        showOTPPage: false,
                        otp: ''
                    })
                    this.dummyOTP = ''
                    if (res.data.email && res.data.lname && res.data.fname && res.data.gender) {
                        this.props.navigation.navigate('List', { "userid": this.state.loginData.userid })
                    } else {
                        this.props.navigation.navigate('UserRegister', { "userid": this.state.loginData.userid })
                    }
                }
            }else{
                alert('Invalid OTP')
            }
        } catch (e) {
            alert('something went wrong')
            console.error(e)
        }
    }
    _handleEnterOTP = (value) => {
        this.dummyOTP = this.dummyOTP + value

    }
    _hanleSubmitMobileNumber = async () => {
        try {
            if (this.state.mobileNumber.length >= 10) {
                let res = await APis.getOTPApi({ "mobile": parseInt(this.state.mobileNumber) })
                if (res.status >= 200 && res.status < 300) {
                    res = await res.json()
                    this.setState({
                        showOTPPage: true,
                        otp: res.data.otp,
                        loginData: res.data
                    })
                    alert(res.data.otp)
                    console.log(res)
                } else {
                    throw new Error('Something went wrong')
                }
            }
        } catch (e) {
            alert('something went wrong')
            console.error(e)
        }
    }
    _handlePress = (event) => {
        this.setState({
            mobileNumber: event
        })
    }
    _handleBackToLoginPage = (e) => {
        this.setState({
            showOTPPage: false
        })
        this.dummyOTP = ''
    }
    render() {
        return (
            <View>
                {this.state.showOTPPage ?
                    <OTPPage
                        handleBackToLoginPage={this._handleBackToLoginPage}
                        _handleEnterOTP={this._handleEnterOTP}
                        _hanleSubmitOTP={this._hanleSubmitOTP}

                    />
                    :
                    <Login
                        hanleSubmitMobileNumber={this._hanleSubmitMobileNumber}
                        _handlePress={this._handlePress}
                        mobileNumber={this.state.mobileNumber}
                    />
                }
            </View>
        )
    }
}