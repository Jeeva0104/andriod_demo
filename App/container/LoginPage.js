import React, { Component } from 'react';
import {
    AsyncStorage
} from 'react-native';
import { connect } from "react-redux";
import Login from '../components/Login'
import Loading from '../components/Loading'

import { userLogin } from '../store/actions/index'

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: 'J123456',
            password: 'test',

        }
    }

    async componentDidMount() {

    }

    hanleSubmit = async () => {
        try {
            let obj = {
                userId: this.state.userId,
                password: this.state.password
            }
            this.props.userLogin(obj)
        } catch (e) {
            alert('something went wrong')
            console.error(e)
        }
    }


    handlePress = (event, type) => {
        switch (type) {
            case 'userId':
                this.setState({
                    userId: event
                })
            case 'password':
                this.setState({
                    password: event
                })
        }
    }


    render() {
        const { userId, password } = this.state
        const { userDetails, error, isLoading, isAuthenticated } = this.props
        return (
            <>
                {
                    isLoading === true ? <Loading /> :
                        isAuthenticated === true ?
                            this.props.navigation.navigate('Drawer', { "userData": userDetails }) :
                            <Login
                                hanleSubmit={this.hanleSubmit}
                                handlePress={this.handlePress}
                                userId={userId}
                                password={password}
                            />
                }

            </>
        )
    }
}

const mapStateToProps = state => {
    const { isLoading = false } = state.Loading
    const {
        error
    } = state.errorHandler
    const { userDetails = {}, isAuthenticated } = state.userAccounts
    return {
        userDetails: userDetails || {},
        error: error || {},
        isLoading,
        isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (params) => dispatch(userLogin(params))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);