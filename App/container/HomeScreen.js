import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { ScrollView } from 'react-native-gesture-handler';
import { Grid, Row, Col } from 'react-native-easy-grid';
import ScheduleTimeCard from '../components/assets/cards/ScheduleTimeCard';
import ScheduleCard from '../components/assets/cards/ScheduleCard';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <View>
                        <CalendarStrip
                            calendarAnimation={{ type: 'sequence', duration: 10 }}
                            selection={'border'}
                            selectionAnimation={{ duration: 10, borderWidth: 1 }}
                            style={{ height: 75, paddingTop: 10, paddingBottom: 20 }}
                            calendarHeaderStyle={{ color: 'white', paddingBottom: 15, }}
                            calendarColor={'#138BFC'}
                            highlightColor={'#9265DC'}
                            dateNumberStyle={{ color: 'white' }}
                            dateNameStyle={{ color: 'white' }}
                            highlightDateNumberStyle={{ color: 'yellow' }}
                            highlightDateNameStyle={{ color: 'yellow' }}
                            borderHighlightColor={'white'}
                            weekendDateNumberStyle={{ color: 'red' }}
                            iconLeft={require('./../components/assets/images/arrowLeft.png')}
                            iconRight={require('./../components/assets/images/arrowRight.png')}
                            iconContainer={{ flex: 0.1 }}
                            scrollable={true}
                        />
                    </View>
                    <View>
                        <ScrollView>
                            <Text style={styles.scheduleTitle}>Today's Schedule</Text>
                            <Grid>
                                <Row>
                                    <Col style={{ width: 120 }}><ScheduleTimeCard time='8.00' format='AM' /></Col>
                                    <Col><ScheduleCard title='Maths' desc='Online class' explain='Chapter Gonna Finish' /></Col>
                                </Row>
                            </Grid>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 300,
    },
    scheduleTitle: {
        padding: 10,
        paddingTop: 20,
        fontFamily: 'Product Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 24,
        color: '#2D2B2B',
    }
});

export default HomeScreen; 