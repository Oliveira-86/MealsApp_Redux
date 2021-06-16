import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

import fonts from '../styles/fonts';

const CategoryGridTile = (props) => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableCmp
                elevation={0.8}
                onPress={props.onSelected}
                style={{ flex: 1 }}
            >
                <View
                    style={{ ...styles.container, ...{ backgroundColor: props.color } }}
                >
                    <Text style={styles.title} numberOfLines={2}>
                        {props.title}
                    </Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        width: 175,
        height: 150,
        margin: 10
    },

    container: {
        flex: 1,
        borderRadius: 10,
        padding: 15,

        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        
        elevation: 10,

        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    title: {
        fontFamily: fonts.bold,
        fontSize: 22,
        textAlign: 'right'
    }
});
