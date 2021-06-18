import React from 'react';
import MealsList from '../components/MealsList';

import { useSelector } from 'react-redux';

const FavoritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    return (
        <MealsList listData={favMeals} navigation={props.navigation} />
    );
};

export default FavoritesScreen;


