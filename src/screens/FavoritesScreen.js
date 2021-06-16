import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsList from '../components/MealsList';

import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props) => {

    const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

    return (
        <MealsList listData={favMeals} navigation={props.navigation} />
    );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
