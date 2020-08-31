import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import SubjectCard from '../components/assets/cards/SubjectCard';
import { ScrollView } from 'react-native-gesture-handler';
import { Col, Row, Grid } from "react-native-easy-grid";

class SubjectScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Grid>
                        <Row>
                            <Col><SubjectCard subject='Science' code='01' chapter='01' /></Col>
                            <Col><SubjectCard subject='Maths' code='02' chapter='02' /></Col>
                        </Row>
                        <Row>
                            <Col><SubjectCard subject='Science' code='01' chapter='01' /></Col>
                            <Col><SubjectCard subject='Maths' code='02' chapter='02' /></Col>
                        </Row>
                        <Row>
                            <Col><SubjectCard subject='Science' code='01' chapter='01' /></Col>
                            <Col><SubjectCard subject='Maths' code='02' chapter='02' /></Col>
                        </Row>
                        <Row>
                            <Col><SubjectCard subject='Science' code='01' chapter='01' /></Col>
                            <Col><SubjectCard subject='Maths' code='02' chapter='02' /></Col>
                        </Row>
                        <Row>
                            <Col><SubjectCard subject='Science' code='01' chapter='01' /></Col>
                            <Col><SubjectCard subject='Maths' code='02' chapter='02' /></Col>
                        </Row>


                        {/* <SubjectCard subject='Science' code='01' chapter='01' />
                        <SubjectCard subject='Maths' code='02' chapter='02' />
                        <SubjectCard subject='Science' code='01' chapter='01' />
                        <SubjectCard subject='Maths' code='02' chapter='02' /> */}
                    </Grid>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        // flexWrap: "wrap",
        // alignItems: "flex-start",
    },
});

export default SubjectScreen;  