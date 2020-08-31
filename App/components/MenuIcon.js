import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image
} from 'react-native';
// import { DrawerActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/EvilIcons';
export default class MenuIcon extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <View style={{ paddingLeft: 5 }}>

                <TouchableOpacity onPress={() => {
                    this.props.navigate.dispatch(DrawerActions.openDrawer());
                }}>
                    <Image
                        source={require('./assets/images/menu.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

