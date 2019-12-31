import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import LoginImage from './LoginImage.js'
import LoginText from './LoginText'
import OTPTextInput from './OtpTextComponent'
export default class OTP extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ marginTop: 25 }}>
                <LoginText
                    handleBack={this.props.handleBackToLoginPage}
                />
                <View style={{ flex: 1, marginTop: 80, marginLeft: 30, marginRight: 30, marginBottom: 30 }}>
                    <Text style={{ paddingBottom: 15, marginLeft: 130 }}>
                        Enter Your OTP
                    </Text>

                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <OTPTextInput
                        handleOTP={this.props._handleEnterOTP}
                    />
                    <OTPTextInput
                        handleOTP={this.props._handleEnterOTP}
                    />
                    <OTPTextInput
                        handleOTP={this.props._handleEnterOTP}
                    />
                    <OTPTextInput
                        handleOTP={this.props._handleEnterOTP}
                    />
                </View>
                <View style={{
                    marginTop: 80, justifyContent: 'center', marginBottom: 40,
                    alignItems: 'center',

                }} >
                    <Button
                        title="Verify"
                        color='#7F00FF'
                        // style={{borderColor:'red'}}
                        onPress={this.props._hanleSubmitOTP}
                    />
                    <Text style={{ marginTop: 5, color: '#7F00FF' }}>
                        Resend OTP
                    </Text>
                </View>
                <LoginImage />
            </View>
        )
    }
}