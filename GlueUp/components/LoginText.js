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
                <View style={{ marginRight: 350 }}>
                    <Icon
                        name='angle-left'
                        type='font-awesome'
                        color='#7F00FF'
                        onPress={this.props.handleBack}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text
                        style={{ fontWeight: 'bold', fontSize: 27, color: '#7F00FF' }}>
                        {this.props.text}
                    </Text>
                </View>
            </View>
        )
    }
}