import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const MealsList = (props) => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = (itemData) => {

        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);

        return (
            <MealItem 
                title={itemData.item.title}
                duration={itemData.item.duration} 
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl} 
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetails', {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav: isFavorite
                    })
                }}
            />
        )
    };

    return (
        <View style={styles.container}>
           <FlatList 
                data={props.listData}
                keyExtractor={(item, _) => String(item.id)}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
                showsVerticalScrollIndicator={false}
           />
        </View>
    )
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    }
})
