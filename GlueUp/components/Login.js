import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    Button
} from 'react-native';

import { SocialIcon } from 'react-native-elements'
import LoginImage from './LoginImage.js'
import LoginText from './LoginText'
export default class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ marginTop: 25 }}>
                <LoginText 
                text={"Login"}
                />
                <View style={{ margin: 30 }}>
                    <Text style={{ paddingBottom: 15 }}>
                        Enter Your Phone Number
                </Text>
                    <TextInput
                        style={{
                            borderColor: 'lightgrey',
                            borderWidth: 0.5,
                            borderRadius: 5,
                            shadowColor: '#000',
                            shadowOpacity: 1,
                            shadowRadius: 1,
                            // elevation: 1
                        }}
                        placeholder="mobile number"
                        placeholderTextColor="#60605e"
                        numeric 
                        value={this.props.mobileNumber}
                        keyboardType={'numeric'} 
                        onChangeText={(text)=>this.props._handlePress(text)}
                        />
                </View>
                <View style={{
                    margin: 7, justifyContent: 'center',
                    alignItems: 'center'
                }} >
                    <Button
                        title="Send OTP"
                        color='#7F00FF'
                        // style={{borderColor:'red'}}
                        onPress={this.props.hanleSubmitMobileNumber}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                    <View style={{
                        backgroundColor: '#7F00FF',
                        padding: 0,
                        height: 2,
                        width: 150,
                        marginTop: 5,
                        marginLeft: 30
                    }} />
                    <View><Text style={{ color: '#7F00FF', padding: 5 }}>Sign in Using</Text></View>
                    <View style={{
                        backgroundColor: '#7F00FF',
                        height: 2,
                        width: 150,
                        marginTop: 5,
                        marginRight: 30
                    }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View
                        style={{ marginLeft: 10 }}
                    >
                        <SocialIcon
                            type='facebook'
                        />
                    </View>
                    <View
                        style={{ marginLeft: 10 }}
                    >
                        <SocialIcon
                            type='google-plus-official'
                        />
                    </View>
                    <View
                        style={{ marginLeft: 10 }}
                    >
                        <SocialIcon
                            type='linkedin'
                        />
                    </View>
                </View>
                <LoginImage />
            </View>
        )
    }
}