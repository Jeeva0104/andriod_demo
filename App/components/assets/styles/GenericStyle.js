import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Color styles goes here..
    themeColor: {
        color: '#138BFC'
    },
    whiteColor: {
        color: '#FFFFFF'
    },
    greyColor: {
        color: '#827D7D'
    },
    redColor: {
        color: '#F65164'
    },
    greenColor: {
        color: '#00B388'
    },
    // Background styles goes here..
    themeBgColor: {
        backgroundColor: '#138BFC'
    },
    whiteBgColor: {
        backgroundColor: '#FFFFFF'
    },
    themeBorderColor: {
        borderColor: '#138BFC',
        // borderStyle: 1,
        borderWidth: 1
    },
    // Flex styles goes here..
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    column: {
        flex: 1,
        flexDirection: 'column'
    },
    // Text styles goes here..
    bold: {
        fontWeight: 'bold'
    },
    normal: {
        fontWeight: 'normal'
    },
    fontWeight500: {
        fontWeight: '500'
    },
    fontSz20: {
        fontSize: 20,
        lineHeight: 25
    },
    fontSz18: {
        fontSize: 18,
        lineHeight: 22.5
    },
    fontSz16: {
        fontSize: 16,
        lineHeight: 20
    },
    fontSz14: {
        fontSize: 14,
        lineHeight: 17.5
    },
    fontSz12: {
        fontSize: 12,
        lineHeight: 15
    },
    fontSz10: {
        fontSize: 10,
        lineHeight: 12.5
    },
    // Title style goes here..
    textStyle: {
        flex: 1,
        flexWrap: 'wrap',
        margin: 5,
        fontFamily: 'Circular Std',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 25,
        color: '#2D2B2B'
    },
    // Margin styles goes here..
    margin10_20: {
        margin: 10,
        marginLeft: 20,
        marginRight: 20
    }
});