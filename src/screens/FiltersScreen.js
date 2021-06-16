import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FiltersScreen = () => {
    return (
        <View style={styles.container}>
            <Text>FiltersScreen</Text>
        </View>
    )
}

export default FiltersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
