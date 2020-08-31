import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from 'react-native-gesture-handler';
import { userLogout } from '../store/actions/index'
import CustomStatusBar from './assets/Statusbar';
import FormStyle from './assets/styles/FormStyle'
import GenericStyle from './assets/styles/GenericStyle';

class MenuIcon extends Component {
    constructor(props) {
        super(props)
    }
    async componentDidMount() {

    }
    render() {
        const {
            firstName = '', lastName = '', gender = '', fatherMobile = '', mobile = '', email = ''

        } = this.props.userDetails
        const { userLogout, navigation } = this.props

        return (
            <>
                <CustomStatusBar bgColor='#138BFC' barStyle='light-content' />
                <ScrollView>
                    <View
                        style={[styles.heightFull]}
                    >
                        {/* <ImageBackground source={require('./assets/images/profileInfoBg.png')} style={styles.bgImage}> */}
                        <View style={styles.profileRowContainer}>
                            {/* <Image source={require('./assets/images/profileInfoBg.png')} style={styles.backgroundImage}/> */}
                            <View>
                                <Image source={require('./assets/images/profilePic.png')} />
                            </View>
                            <View style={styles.nameContainer}>
                                <Text style={[GenericStyle.textStyle, GenericStyle.bold, GenericStyle.fontSz20,
                                GenericStyle.whiteColor]}>
                                    {firstName} {lastName}
                                </Text>
                                <Text style={[{ marginLeft: 5, marginBottom: 5 }, GenericStyle.fontSz16,
                                GenericStyle.fontWeight500, GenericStyle.whiteColor]}>
                                    Section
                                </Text>
                                <Text style={styles.roleStyle}>Computer Science</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={{
                                marginLeft: 10, justifyContent: 'center', marginTop: 15,
                            }}>
                                <Text style={[{ marginLeft: 5, marginBottom: 5 }, GenericStyle.fontSz16,
                                GenericStyle.fontWeight500, GenericStyle.whiteColor]}>
                                    <FontAwesome5 style={[{ color: '#FFFFFF' }]} size={18} name={'edit'} /> Edit Profile
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {/* </ImageBackground> */}
                        <View style={styles.profileInfoViewStyle}>
                            <Text style={[GenericStyle.textStyle, GenericStyle.bold, GenericStyle.fontSz20,
                            GenericStyle.margin10_20]}>
                                Personal info
                        </Text>
                            <Text style={[styles.greyColor, GenericStyle.fontSz12, GenericStyle.fontWeight500,
                            GenericStyle.margin10_20]}>
                                Gender
                        </Text>
                            <Text style={[GenericStyle.fontSz16, GenericStyle.fontWeight500,
                            GenericStyle.margin10_20]}>
                                <Image source={require('./assets/images/menIcon.png')} />  {gender.toUpperCase()}
                            </Text>
                            <Text style={[styles.greyColor, GenericStyle.fontSz12, GenericStyle.fontWeight500,
                            GenericStyle.margin10_20]}>
                                Mobile
                        </Text>
                            <Text style={[GenericStyle.fontSz16, GenericStyle.fontWeight500,
                            GenericStyle.margin10_20]}>
                                <Image source={require('./assets/images/phoneIcon.png')} />  {fatherMobile, mobile}
                            </Text>
                            <Text style={[styles.greyColor, GenericStyle.fontSz12, GenericStyle.fontWeight500,
                            GenericStyle.margin10_20]}>
                                Email
                        </Text>
                            <Text style={[GenericStyle.fontSz16, GenericStyle.fontWeight500,
                            GenericStyle.margin10_20]}>
                                <Image source={require('./assets/images/mailIcon.png')} />  {email}
                            </Text>
                            <View style={{
                                marginTop: "10%", justifyContent: 'center', marginBottom: "10%", margin: 20
                            }}>
                                {/* <Button
                                title="Logout"
                                color='#138BFC'
                                onPress={async () => {
                                    userLogout(navigation)
                                }}
                            /> */}
                                <TouchableOpacity
                                    style={[FormStyle.buttonStyle, GenericStyle.whiteBgColor, GenericStyle.themeBorderColor]}
                                    onPress={async () => {
                                        userLogout(navigation)
                                    }}
                                >
                                    <Text style={[FormStyle.buttonName, GenericStyle.themeColor]}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        userLogout: (navigation) => dispatch(userLogout(navigation))
    };
}
const mapStateToProps = state => {
    const { userDetails = {} } = state.userAccounts
    return {
        userData: userDetails || {},
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuIcon);
const styles = StyleSheet.create({
    profileRowContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        paddingBottom: 1,
    },
    roleStyle: {
        margin: 5,
        padding: 8,
        fontFamily: 'Circular Std',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 15,
        color: '#FFFFFF',
        backgroundColor: '#FFA04C',
        borderRadius: 6,
    },
    profileInfoViewStyle: {
        marginTop: '10%',
        paddingTop: 10,
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
    heightFull: {
        height: '100%',
        backgroundColor: '#138BFC',
    },
    bgImage: {
        height: 175,
        flex: 1,
        resizeMode: "cover",
        backgroundColor: '#138BFC',
        padding: 10,
    },
    nameContainer: {
        marginLeft: 20,
    },
    greyColor: {
        color: '#827D7D'
    },
});
