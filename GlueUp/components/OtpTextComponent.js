import React, { Component } from 'react';
import {
    TextInput,
} from 'react-native';
export default class OTPTextInput extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <TextInput
                        style={{
                            borderColor: 'lightgrey',
                            borderWidth: 0.5,
                            borderRadius: 5,
                            shadowColor: '#000',
                            shadowOpacity: 1,
                            shadowRadius: 1,
                            width:40,
                            height:40,
                            marginRight:5,
                            // elevation: 1
                        }}
                        placeholder=""
                        maxLength={1}
                        placeholderTextColor="#60605e"
                        numeric 
                        keyboardType={'numeric'} 
                        onChangeText={(text)=>this.props.handleOTP(text)}
                        />
        )
    }
}