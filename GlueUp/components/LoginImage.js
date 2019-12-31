import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    Button
} from 'react-native';
export default class LoginImage extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View style={{ marginLeft: 10 }}>
                <Image
                    style={{ height: "60%", width: "100%" }}
                    source={require('../Group4.png')}
                />
            </View>
        )
    }
} 