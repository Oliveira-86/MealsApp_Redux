import React from 'react';
import { View, StyleSheet } from 'react-native';
import MealsList from '../components/MealsList';

import DefaultText from '../components/DefaultText';

import { useSelector } from 'react-redux';

const FavoritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <DefaultText>No favorite meals found. Start adding some!</DefaultText>
            </View>
        )
    }

    return (
        <MealsList listData={favMeals} navigation={props.navigation} />
    );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


