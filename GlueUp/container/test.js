import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    Button
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const icon = <FontAwesome5 name={'comments'} />;
export default class LoginPage extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View style={{ marginTop: 25 }}>
                <View style={{ alignItems: 'center', }}>
                    <Text
                        style={{fontWeight:'bold', fontSize: 27,color:'#7F00FF' }}>
                        Login
                    </Text>
                </View>
                <View style={{ margin: 30 }}>
                    <Text style={{ paddingBottom: 15 }}>
                        Enter Your Phone Number
                </Text>
                    <TextInput
                        style={{
                            borderColor: 'lightgrey',
                            borderWidth: 0.5,
                            borderRadius: 5,
                            shadowColor: '#000',
                            shadowOpacity: 5,
                            shadowRadius: 1,
                            elevation: 3
                        }}
                        placeholder="mobile number"
                        placeholderTextColor="#60605e"
                        numeric value
                        keyboardType={'numeric'} />
                </View>
                <View style={{
                    margin: 7, justifyContent: 'center',
                    alignItems: 'center',
                }} >
                    <Button
                        title="Send OTP"
                        color='#7F00FF'
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                    <View style={{
                        backgroundColor: '#7F00FF',
                        padding:0,
                        height: 2,
                        width: 150,
                        marginTop: 5,
                        marginLeft: 20
                    }} />
                    <View><Text style={{color:'#7F00FF',padding:5}}>Sign in Using</Text></View>
                    <View style={{
                        backgroundColor: '#7F00FF',
                        height: 2,
                        width: 150,
                        marginTop: 5,
                        marginRight: 10
                    }} />
                </View>
                <View style={{flexDirection:'row',justifyContent: 'center'}}>
                    <View
                     style={{marginLeft:10}}
                    >

                    <Button
                    title="f"
                   
                    >
                        {icon}
                    </Button>
                    </View>
                    <View
                    style={{marginLeft:10}}
                    >

                    <Button
                    title="L"
                    ></Button>
                    </View>
                    <View 
                    style={{marginLeft:10}}
                    >

                    <Button
                    title="G"
                    ></Button>
                    </View>
                </View>
                <View style={{marginTop:20,marginLeft:10}}>
                    <Image        
                    style={{height:"70%",width:"100%"}}             
                        source={require('../Group4.png')}
                    />
                </View>
            </View>
        )
    }
}