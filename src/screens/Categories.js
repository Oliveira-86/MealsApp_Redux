import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { MealsFavTabNavigation } from '../navigation/MealsNavigation.js';

import CategoryGridTile from '../components/CategoryGridTile.js';

import { CATEGORIES } from '../data/dummy-data.js'; 

const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return <CategoryGridTile
                    color={itemData.item.color} 
                    title={itemData.item.title} 
                    onSelected={() => {
                        props.navigation.navigate('CategoryMeals', {
                            categoryId: itemData.item.id
                        })
                    }} 
                />
    }

    return (
        <FlatList 
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderGridItem}
            keyExtractor={(item) => item.id}
        />
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
