import React, { Component } from 'react';
import {
    View,
    AsyncStorage,
    StyleSheet
} from 'react-native';
import AccountDetails from '../components/AccountDetails'
export default class MenuIcon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userDetails: ''
        }
    }
    async componentDidMount() {
        try {
            const userDetails = await AsyncStorage.getItem("USER_DATA");
            this.setState({
                userDetails: JSON.parse(userDetails)
            })
        } catch (e) {
            console.error(e)
            alert(e)
        }
    }
    render() {
        const { userDetails } = this.state || {}

        return (
            <View style={styles.profilePageStyle}>
                <AccountDetails
                    userDetails={userDetails}
                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profilePageStyle: {
        margin: 0,
    },
});