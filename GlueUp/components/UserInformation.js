import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    ScrollView,
    Picker,
    Button
} from 'react-native';
import UserInfo from './LoginText';


export default class UserInformationComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log(this.props)
        return (
            <ScrollView style={{ marginTop: 15 }}>
                <UserInfo
                    text={"User Information"}
                    handleBack={this.props.handelShowInfo}
                    />
                <View style={{ marginLeft: 30, marginRight: 30, marginBottom: 5 }}>
                    <Text style={{ paddingBottom: 5, fontWeight: 'bold' }}>
                        Address Line1
                </Text>
                    <TextInput
                        style={{
                            borderColor: 'lightgrey',
                            borderWidth: 0.5,
                            borderRadius: 5,
                            shadowColor: '#000',
                            shadowOpacity: 1,
                            shadowRadius: 1,
                        }}
                        placeholder="Address Line1"
                        placeholderTextColor="#60605e"
                    />
                </View>
                <View style={{ marginLeft: 30, marginRight: 30, marginBottom: 5 }}>
                    <Text style={{ paddingBottom: 5, fontWeight: 'bold' }}>
                        Address Line2
                </Text>
                    <TextInput
                        style={{
                            borderColor: 'lightgrey',
                            borderWidth: 0.5,
                            borderRadius: 5,
                            shadowColor: '#000',
                            shadowOpacity: 1,
                            shadowRadius: 1,
                        }}
                        placeholder="Address Line2"
                        placeholderTextColor="#60605e"
                    />
                </View>
                <View style={{ marginLeft: 30, marginRight: 30, marginBottom: 5 }}>
                    <Text style={{ paddingBottom: 5, fontWeight: 'bold' }}>
                        City
                </Text>
                    <TextInput
                        style={{
                            borderColor: 'lightgrey',
                            borderWidth: 0.5,
                            borderRadius: 5,
                            shadowColor: '#000',
                            shadowOpacity: 1,
                            shadowRadius: 1,
                        }}
                        placeholder="City"
                        placeholderTextColor="#60605e"
                    />
                </View>
                <View style={{ marginLeft: 30, marginRight: 30, marginBottom: 5 }}>
                    <Text style={{ paddingBottom: 5, fontWeight: 'bold' }}>
                        State
                </Text>
                    <TextInput
                        style={{
                            borderColor: 'lightgrey',
                            borderWidth: 0.5,
                            borderRadius: 5,
                            shadowColor: '#000',
                            shadowOpacity: 1,
                            shadowRadius: 1,
                        }}
                        placeholder="State"
                        placeholderTextColor="#60605e"
                    />
                </View>
                <View style={{ marginLeft: 30, marginRight: 30, marginBottom: 5 }}>
                    <Text style={{ paddingBottom: 5, fontWeight: 'bold' }}>
                        PinCode
                </Text>
                    <TextInput
                        style={{
                            borderColor: 'lightgrey',
                            borderWidth: 0.5,
                            borderRadius: 5,
                            shadowColor: '#000',
                            shadowOpacity: 1,
                            shadowRadius: 1,
                        }}
                        placeholder="PinCode"
                        placeholderTextColor="#60605e"
                        numeric
                        keyboardType={'numeric'}
                    />
                </View>
                <View style={{
                    margin: 10, justifyContent: 'center',
                    alignItems: 'center', flexDirection: 'row'
                }} >
                    <View>

                        <Button
                            title="Proceed Next"
                            color='#7F00FF'
                            style={{

                                borderRadius: 20
                            }}
                            // disabled={true}
                            onPress={this.props.handelUserInfo}
                        />
                    </View>
                    <View style={{ marginLeft: 30 }}>

                        <Button
                            title="Skip"
                            color='lightgrey'
                            style={{

                                borderRadius: 20
                            }}
                            onPress={this.props.handelPushToList}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}