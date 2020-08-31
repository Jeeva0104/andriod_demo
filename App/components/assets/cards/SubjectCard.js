import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards-custom';
import { ScrollView } from 'react-native-gesture-handler';

class SubjectCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <Card style={styles.subjectCardStyle}>
                        <CardImage
                            source={require('../images/rectBlue.png')}
                            style={styles.subjectImageStyle}
                        />
                        {/* <Text>
                        <Image source={require('../images/science.png')} style={styles.subjectImageStyle} />
                    </Text> */}
                        <Text style={styles.subjectCardTitleStyle}>{this.props.subject}</Text>
                        <CardAction
                            separator={true}
                            inColumn={false}
                            style={styles.subjectCardBodyStyle}
                        >
                            <View>
                                <Text style={styles.subjectCardInfoTitleStyle}>
                                    Subject Code  -  <Text style={styles.subjectCardInfoStyle}>{this.props.code}</Text>
                                </Text>
                                <Text style={styles.subjectCardInfoTitleStyle}>
                                    No. Chapters  -  <Text style={styles.subjectCardInfoStyle}>{this.props.chapter}</Text>
                                </Text>
                            </View>
                        </CardAction>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    subjectCardStyle: {
        // width: '40%',
        margin: 12,
        borderRadius: 12,
        backgroundColor: '#138BFC',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    subjectCardBodyStyle: {
        backgroundColor: '#FFFFFF',
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        padding: 10,
        paddingTop: 0,

    },
    subjectImageStyle: {
        height: 75,
        padding: 10,
    },
    subjectCardTitleStyle: {
        fontFamily: 'Circular Std Book',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 20,
        color: '#FFFFFF',
        padding: 10,
    },
    subjectCardInfoTitleStyle: {
        paddingTop: 10,
        paddingLeft: 5,
        fontFamily: 'Circular Std',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 15,
        color: '#2D2B2B',
    },
    subjectCardInfoStyle: {
        paddingTop: 10,
        paddingLeft: 5,
        fontFamily: 'Circular Std',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 15,
        color: '#ACACAC',
    }
});

// https://www.npmjs.com/package/react-native-cards-custom

export default SubjectCard; 