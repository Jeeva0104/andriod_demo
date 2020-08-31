import React from "react";
import { StyleSheet, View, Text, AsyncStorage, Image } from "react-native";
import { connect } from "react-redux";
import CustomStatusBar from "../components/assets/Statusbar";


class InitialScreen extends React.Component {
    async componentDidMount() {
        try {
            let checkForLogin = await AsyncStorage.getItem("AUTH_KEY")
            if (checkForLogin) {
                let userData = await AsyncStorage.getItem("USER_DATA")
                setTimeout(() => {
                    this.props.navigation.navigate('Drawer', { "userData": JSON.parse(userData) })
                }, 100)
            } else {
                setTimeout(() => {
                    this.props.navigation.navigate('Login')
                }, 100)

            }
        } catch (err) {
            alert('something went wrong')
        }
    }
    render() {
        return (
            <View>
                <CustomStatusBar />
                <Image style={styles.bgImage} source={require('../components/assets/images/splash.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bgImage: {
        width: '100%',
        height: '100%',
    },
});

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(InitialScreen);