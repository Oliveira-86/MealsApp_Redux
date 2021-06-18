import React, { useLayoutEffect, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { useSelector, useDispatch } from 'react-redux';

import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/meals';

import HeaderButton from '../components/HeaderButton';

const ListItem = (props) => {

    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};


const MealDetailsScreen = (props) => {

    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.route.params.mealId;
    const currentMealsFav = useSelector(state =>
        state.meals.favoriteMeals.some(meal => meal.id === mealId)
    );

    const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useLayoutEffect(() => {
        props.navigation.setOptions({
         headerRight: () => {
            const isFavorite = props.route.params.isFav;    
                return (
                    <HeaderButton
                        color={colors.primaryColor}
                        name={isFavorite ? 'ios-star' : 'ios-star-outline'}
                        size={28}
                        onPress={toggleFavoriteHandler}
                    />
                );
            },
            headerTintColor: colors.primaryColor,
        });
    }, [toggleFavoriteHandler]);


    useEffect(() => {
        props.navigation.setParams({ isFav: currentMealsFav });
    }, [currentMealsFav])

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <Image
                style={styles.image}
                source={{ uri: selectedMeal.imageUrl }}
            />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}

            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map((steps) => (
                <ListItem key={steps}>{steps}</ListItem>
            ))}

        </ScrollView>
    );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },

    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },

    title: {
        fontFamily: fonts.bold,
        fontSize: 20,
        textAlign: 'center'
    },

    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: colors.primaryColor,
        borderWidth: 1,
        padding: 12,
        borderRadius: 20,
    }
});
