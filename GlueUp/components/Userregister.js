import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    ScrollView,
    Picker,
    Button
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import UserRegister from './LoginText'

export default class UserRegisterComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log(this.props)
        return (
            <ScrollView style={{ marginTop: 15 }}>
                <UserRegister
                    text={"User Register"} handleBack={this.props.handelBackToLoginPage}/>
                <View style={{ marginLeft: 30, marginRight: 30, marginBottom: 5 }}>
                    <Text style={{ paddingBottom: 5, fontWeight: 'bold' }}>
                        First Name
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
                        placeholder="First Name"
                        placeholderTextColor="#60605e"
                        value={this.props.fname}
                        onChangeText={(text) => this.props.handelFirstName(text)}
                    />
                </View>
                <View style={{ marginLeft: 30, marginRight: 30, marginBottom: 5 }}>
                    <Text style={{ paddingBottom: 5, fontWeight: 'bold' }}>
                        Last Name
                </Text>
                    <TextInput
                        style={{
                            borderColor: 'lightgrey',
                            borderWidth: 0.5,
                            borderRadius: 5,
                            shadowColor: '#000',
                            shadowOpacity: 1,
                            shadowRadius: 1,
                            // elevation: 1
                        }}
                        placeholder="Last Name"
                        placeholderTextColor="#60605e"
                        // numeric 
                        value={this.props.lname}
                        // keyboardType={'numeric'} 
                        onChangeText={(text) => this.props.handelLastName(text)}
                    />
                </View>
                <View style={{ marginLeft: 30, marginRight: 30, marginBottom: 5 }}>
                    <Text style={{ paddingBottom: 5, fontWeight: 'bold' }}>
                        Email
                </Text>
                    <TextInput
                        style={{
                            borderColor: 'lightgrey',
                            borderWidth: 0.5,
                            borderRadius: 5,
                            shadowColor: '#000',
                            shadowOpacity: 1,
                            shadowRadius: 1,
                            // elevation: 1
                        }}
                        placeholder="Email"
                        placeholderTextColor="#60605e"
                        // numeric 
                        value={this.props.email}
                        // keyboardType={'numeric'} 
                        onChangeText={(text) => this.props.handelEmail(text)}
                    />
                </View>
                <View style={{ marginLeft: 30, marginRight: 30, marginBottom: 5 }}>
                    <Text style={{ paddingBottom: 5, fontWeight: 'bold' }}>
                        Gender
                </Text>
                    <Picker
                        selectedValue={this.props.gender}
                        style={{
                            height: 50, width: 150, borderColor: 'red',
                            borderWidth: 0.5,
                            borderRadius: 5,
                            shadowColor: 'red',
                            shadowOpacity: 1,
                            shadowRadius: 1,
                        }}
                        // onValueChange={(itemValue, itemIndex) =>
                        //     this.setState({ language: itemValue })
                        // }
                        onValueChange={(itemValue) => this.props.handelGender(itemValue)}
                    >
                        <Picker.Item label="MALE" value="Male" />
                        <Picker.Item label="FEMALE" value="Female" />
                    </Picker>

                </View>
                <View style={{ marginLeft: 30, marginRight: 30, marginBottom: 5 }}>
                    <Text style={{ paddingBottom: 5, fontWeight: 'bold' }}>
                        Date Of birth
                </Text>
                    <DatePicker
                        style={{ width: 150 }}
                        date={this.props.dob}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderColor: 'lightgrey',
                                borderWidth: 0.5,
                                borderRadius: 5,
                                shadowColor: '#000',
                                shadowOpacity: 1,
                                shadowRadius: 1,
                            }
                        }}
                        onDateChange={(date) => this.props.handelDOB(date)}
                    />
                </View>
                <View style={{
                    margin: 10, justifyContent: 'center',
                    alignItems: 'center'
                }} >
                    <Button
                        title="Proceed Next"
                        color='#7F00FF'
                        style={{

                            borderRadius:20
                        }}
                        onPress={this.props.hanleSaveUser}
                    />
                </View>
            </ScrollView>
        )
    }
}

