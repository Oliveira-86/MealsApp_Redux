import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = (props) => {
    
    const mealId = props.route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
 
    return (
        <View style={styles.container}>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
