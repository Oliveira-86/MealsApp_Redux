import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import colors from '../styles/colors';

const HeaderButton = (props) => {
    return (
        <Ionicons.Button {...props} 
            name={props.name}
            size={props.size}
            color={props.color}
            backgroundColor='white'
            style={{ marginLeft: 15 }}
        />
    );
};

export default HeaderButton;

const styles = StyleSheet.create({});
