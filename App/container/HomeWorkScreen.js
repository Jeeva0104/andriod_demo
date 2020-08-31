import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
class ProfileScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container} >
                <Text>Homework Screen</Text >
            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default ProfileScreen; 