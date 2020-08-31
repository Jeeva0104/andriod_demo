import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { Icon } from 'react-native-elements';
export default class LoginText extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View >
                <View style={{ alignItems: 'center' }}>
                    <Text
                        style={this.props.style}>
                        {this.props.text}
                    </Text>
                </View>
            </View>
        )
    }
}