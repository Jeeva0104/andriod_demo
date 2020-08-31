import React, { Component } from 'react';
import {
    View,
    Image
} from 'react-native';
export default class LoginImage extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Image
                    style={{ height: "60%", width: "100%" }}
                    source={require('./assets/images/loginBgImage.png')}
                />
            </View>
        )
    }
} 