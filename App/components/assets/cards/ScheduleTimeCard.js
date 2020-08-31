import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GenericStyle from '../styles/GenericStyle';

class ScheduleTimeCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <TouchableOpacity style={styles.scheduleTimeCardStyle}>
                        <Text style={[GenericStyle.fontSz16, GenericStyle.bold,
                        GenericStyle.margin10_20, GenericStyle.greenColor]}>{this.props.time}</Text>
                        <Text style={[{ marginTop: 5 }, GenericStyle.fontSz12, GenericStyle.bold,
                        GenericStyle.margin10_20, GenericStyle.greenColor]}>{this.props.format}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scheduleTimeCardStyle: {
        // width: '30%',
        height: 80,
        margin: 12,
        borderRadius: 12,
        backgroundColor: '#DBFFF6'
    }
});

// https://www.npmjs.com/package/react-native-cards-custom

export default ScheduleTimeCard; 