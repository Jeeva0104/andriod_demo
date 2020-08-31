import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    Button
} from 'react-native';
export default class Logo extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View style={this.props.style}>
                <Image
                    // style={{ height: "60%", width: "100%" }}
                    source={require('./assets/images/eduzy.png')}
                />
            </View>
        )
    }
} 