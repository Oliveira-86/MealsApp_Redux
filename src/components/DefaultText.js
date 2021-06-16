import React from 'react';
import { StyleSheet, Text } from 'react-native';
import fonts from '../styles/fonts';

const DefaultText = (props) => {
    return (
            <Text style={styles.text}>{props.children}</Text>   
    );
};

export default DefaultText

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.regular
    }
});
