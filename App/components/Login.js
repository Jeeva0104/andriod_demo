import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

import { SocialIcon } from 'react-native-elements'
import LoginImage from './LoginImage.js'
import LoginText from './LoginText'
import Logo from './Logo.js';
import FormStyle from './assets/styles/FormStyle'

export default class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { userId, password } = this.props
        return (
            <View style={{ marginTop: 25, backgroundColor: '#FFFFFF' }}>
                <View>
                    <Logo style={styles.logoStyle} />
                    <LoginText
                        style={styles.loginTitle}
                        text={"Hey Welcome"}
                    />
                </View>
                <View style={{ margin: 30 }}>
                    <Text style={FormStyle.inputTitle}>
                        UserId
                    </Text>
                    <TextInput
                        style={FormStyle.inputBox}
                        placeholder="UserId"
                        placeholderTextColor="#8D8D8D"
                        // numeric 
                        value={userId}
                        // keyboardType={'numeric'} 
                        onChangeText={(text) => this.props.handlePress(text, 'userId')}
                    />
                </View>
                <View style={{ marginTop: '0%', margin: 30 }}>
                    <Text style={FormStyle.inputTitle}>
                        Password
                </Text>
                    <TextInput
                        style={FormStyle.inputBox}
                        placeholder="Password"
                        placeholderTextColor="#8D8D8D"
                        secureTextEntry={true}
                        value={password}
                        // keyboardType={'default'}
                        onChangeText={(text) => this.props.handlePress(text, 'password')}
                    />
                </View>
                <View style={{
                    marginTop: "0%", margin: 30, justifyContent: 'center',
                    // alignItems: 'center'
                }} >
                    {/* <Button
                        title="Login"
                        color='#138BFC'
                        style={styles.loginButton}
                        onPress={this.props.hanleSubmit}
                    /> */}
                    <TouchableOpacity
                        style={FormStyle.buttonStyle}
                        onPress={this.props.hanleSubmit}
                    >
                        <Text style={FormStyle.buttonName}>Login</Text>
                    </TouchableOpacity>
                </View>
                <LoginImage />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoStyle: {
        alignItems: 'center',
        marginBottom: 20,
    },
    loginTitle: {
        fontFamily: 'PatuaOne-Regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: 39,
        color: '#138BFC',
    },
});