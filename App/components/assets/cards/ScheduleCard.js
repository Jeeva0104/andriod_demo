import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GenericStyle from '../styles/GenericStyle';

class ScheduleCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <TouchableOpacity style={styles.scheduleCardStyle}>
                        <View style={[GenericStyle.row]}>
                            <Text style={[GenericStyle.fontSz16, GenericStyle.bold, GenericStyle.margin10_20]}>{this.props.title}</Text>
                            <Text style={[{ marginTop: 15 }, GenericStyle.fontSz10, GenericStyle.redColor, GenericStyle.margin10_20]}>{this.props.desc}</Text>
                        </View>
                        <Text style={[{ marginTop: 5 }, GenericStyle.fontSz12, GenericStyle.margin10_20]}>
                            {this.props.explain}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scheduleCardStyle: {
        minHeight: 80,
        margin: 12,
        borderRadius: 12,
        backgroundColor: '#DBFFF6'
    }
});

// https://www.npmjs.com/package/react-native-cards-custom

export default ScheduleCard; 