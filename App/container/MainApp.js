/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */




import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { connect } from "react-redux";
import { createAppContainer } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/EvilIcons';
import InitialScreen from './InitialScreen'
import BottomTabs from './BottomTabs';
import LoginPage from './LoginPage'
import Accounts from './Accounts'
import Notes from './Notes'
import MenuIcon from '../components/MenuIcon'
import Loading from '../components/Loading'
import { TouchableOpacity } from 'react-native-gesture-handler';



import LiveScreen from './LiveScreen'

const Navigation = new createDrawerNavigator(
    {
        Home: { screen: BottomTabs },
        Notes: { screen: Notes }
    },
    {
        initialRouteName: 'Home',
        drawerType: "slide",
        // swipeEnabled: true,
        // gesturesEnabled: true,
    }
);

const Stack = createStackNavigator(
    {
        Initial: {
            screen: InitialScreen,
            navigationOptions: () => ({
                headerShown: false,
            })

        },
        Login: {
            screen: LoginPage,
            navigationOptions: () => ({
                headerShown: false,
            })

        },
        Drawer: {
            screen: Navigation,
            navigationOptions: ({ navigation }) => ({
                title: "Eduzy",
                headerTitleStyle: { color: '#138BFC', fontWeight: 'bold' },
                headerShown: true,
                headerLeft: (
                    <MenuIcon navigate={navigation} />
                ),
                headerRight: (
                    <View style={styles.row}>
                        <MaterialIcons size={30} name={"notifications-none"} style={{ paddingRight: 6, }} />
                        <TouchableOpacity>
                            <Icon size={36} name={"user"} onPress={() => {
                                navigation.navigate('Accounts')
                            }} />
                        </TouchableOpacity>
                    </View>

                )
            }),
        },
        Accounts: {
            screen: Accounts,
            navigationOptions: ({ navigation }) => ({
                title: "Profile",
                headerTitleStyle: { color: '#FFFFFF', fontWeight: 'bold' },
                headerStyle: { backgroundColor: '#138BFC' },
            }),
        }
    }
);


const Login = createAppContainer(Stack);

class Main extends Component {
    render() {
        return (
            <>
                <Login />
            </>
        );
    }
}


const mapStateToProps = state => {
    const { isLoading = false } = state.Loading
    return {
        isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 3,
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);