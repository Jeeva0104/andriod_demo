import React from 'react'
import {
    AsyncStorage, View,
} from 'react-native'
import UserRegister from '../components/Userregister'
import APis from '../Api/routes'
import UserInformation from '../components/UserInformation'
import Moment from 'moment';
export default class UserRegisterPage extends React.Component {
    constructor() {
        super()
        this.state = {
            fname: '',
            lname: '',
            email: '',
            gender: 'MALE',
            dob: '',
            showUserInfo: false
        }
    }
    async componentDidMount() {
        try {

        } catch (err) {
        }
    }
    handelFirstName = (fname) => {
        if (fname) {
            this.setState({
                fname: fname
            })
        }
    }
    handelLastName = (lname) => {
        if (lname) {
            this.setState({
                lname: lname
            })
        }
    }
    handelEmail = (email) => {
        if (email) {
            this.setState({
                email: email
            })
        }
    }
    handelGender = (gender) => {
        if (gender) {
            this.setState({
                gender: gender
            })
        }
    }

    handelDOB = (dob) => {
        if (dob) {
            this.setState({
                dob: dob
            })
        }
    }
    handelShowInfo = () => {
        this.setState({
            showUserInfo: false
        })
    }
    handelBackToLoginPage=()=>{
        this.props.navigation.navigate('Login')
    }
    hanleSaveUser = async () => {
        try {

            let obj = {
                userid: this.props.navigation.state.params.userid,
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                gender: this.state.gender,
                dob: Moment(this.state.dob).format('YYYY-MM-DD'),
            }
            const authToken = await AsyncStorage.getItem("AUTH_KEY")
            let res = await APis.userRegistration(obj, authToken)
            if (res.status >= 200 && res.status < 300) {
                this.setState({
                    showUserInfo: true
                })
            }
        } catch (e) {
            alert('something went wrong')
            console.error(e)
        }
    }
    handelUserInfo = async () => {
        try {

            let authToken = await AsyncStorage.getItem("AUTH_KEY")
            let obj = {
                userid: this.props.navigation.state.params.userid,
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                gender: this.state.gender,
                dob: this.state.dob,
                "address": {
                    "addressLine1": "Address Line 1",
                    "addressLine2": "Address Line 1",
                    "city": "Tirupur",
                    "state": "Tamilnadu",
                    "country": "India",
                    "pincode": "641601"
                },
                "documents": {},
                "additional_info": {
                    "profilePic": "http://samplelink.jpeg"
                }
            }
            let res = await APis.userInfo(obj, authToken)
            if (res.status >= 200 && res.status < 300) {
                this.setState({
                    showUserInfo: false
                })
                this.props.navigation.navigate('List', { "userid": this.props.navigation.state.params.userid })
            }
        } catch (e) {
            alert('something went wrong')
            console.error(e)
        }
    }
    handelPushToList = async () => {
        this.props.navigation.navigate('List', { "userid": this.props.navigation.state.params.userid })
    }
    render() {
        return (
            <View>
                {this.state.showUserInfo ?
                    <UserInformation
                        handelPushToList={this.handelPushToList}
                        handelUserInfo={this.handelUserInfo}
                        handelShowInfo={this.handelShowInfo}
                    />
                    :
                    <UserRegister
                        handelFirstName={this.handelFirstName}
                        handelLastName={this.handelLastName}
                        handelEmail={this.handelEmail}
                        handelGender={this.handelGender}
                        handelDOB={this.handelDOB}
                        hanleSaveUser={this.hanleSaveUser}
                        fname={this.state.fname}
                        lname={this.state.lname}
                        email={this.state.email}
                        gender={this.state.gender}
                        dob={this.state.dob}
                        handelBackToLoginPage={this.handelBackToLoginPage}
                    />
                }

            </View>
        );
    }
}


