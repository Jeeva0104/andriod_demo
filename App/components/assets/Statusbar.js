import React from 'react';
import { View, StatusBar } from 'react-native';

class CustomStatusBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={this.props.bgColor || '#FFFFFF'}
                    barStyle={this.props.barStyle || 'dark-content'}
                />
            </View>
        );
    }
}

export default CustomStatusBar; 