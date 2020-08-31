import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../container/HomeScreen';
import HomeWorkScreen from './HomeWorkScreen';
import LiveScreen from '../container/LiveScreen';
import SubjectScreen from '../container/SubjectScreen';
import ExamScreen from '../container/ExamScreen';

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Home',
                headerTitle: "Upload",

                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <EntypoIcon style={[{ color: tintColor }]} size={22} name={'home'} />
                    </View>),
            }
        },
        HomeWork: {
            screen: HomeWorkScreen,
            navigationOptions: {
                tabBarLabel: 'Homework',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <FontAwesome5 style={[{ color: tintColor }]} size={20} name={'book-open'} />
                    </View>),
                activeColor: '#7DFFE0',
                inactiveColor: '#024E95',
                barStyle: { backgroundColor: '#138BFC' },
            }
        },
        Live: {
            screen: LiveScreen,
            navigationOptions: {
                tabBarLabel: 'Live',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <EntypoIcon style={[{ color: tintColor }]} size={22} name={'video-camera'} />
                    </View>),
                activeColor: '#7DFFE0',
                inactiveColor: '#024E95',
                barStyle: { backgroundColor: '#138BFC' },
            }
        },
        Subject: {
            screen: SubjectScreen,
            navigationOptions: {
                tabBarLabel: 'Subject',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <FontAwesome5 style={[{ color: tintColor }]} size={20} name={'book'} />
                    </View>),
                activeColor: '#7DFFE0',
                inactiveColor: '#024E95',
                barStyle: { backgroundColor: '#138BFC' },
            }
        },
        Exam: {
            screen: ExamScreen,
            navigationOptions: {
                tabBarLabel: 'Exam',
                headerTitle: "Upload",
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <EntypoIcon style={[{ color: tintColor }]} size={23} name={'graduation-cap'} />
                    </View>),
                activeColor: '#7DFFE0',
                inactiveColor: '#024E95',
                barStyle: { backgroundColor: '#138BFC' },
            }
        },

    },
    {
        initialRouteName: "Home",
        activeColor: '#7DFFE0',
        inactiveColor: '#024E95',
        barStyle: { backgroundColor: '#138BFC' },

    },
);
const Tab = createAppContainer(TabNavigator);


class BottomTabs extends React.Component {
    render() {
        return (
            <Tab />
        );
    }
}
export default BottomTabs;  