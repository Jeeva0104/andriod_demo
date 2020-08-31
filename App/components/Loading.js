import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

const Loading = () => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Loading);