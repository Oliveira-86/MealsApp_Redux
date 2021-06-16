import React from 'react';
import { View, Text } from   'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CATEGORIES, MEALS } from '../data/dummy-data';

import { Ionicons } from '@expo/vector-icons';

import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMealsScreen';
import MealDetails from '../screens/MealDetailsScreen';
import Favorites from '../screens/FavoritesScreen';
import FavNavigation from './FavNavigation';

import HeaderButton from '../components/HeaderButton';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Stack = createStackNavigator();

const MealsNavigation = () => {

    
  
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Categories" 
                component={Categories} 
                options={{
                    headerTitle: 'Meal Categories',
                    headerStyle: {
                        backgroundColor: 'white',
                        elevation: 8, 
                    },
                    headerTintColor: colors.primaryColor,
                    headerRight: () => (
                        <HeaderButton
                            name="ios-menu" 
                            onPress={() => {}}
                        />
                    )
                   
                }}
            />
            <Stack.Screen 
                name="CategoryMeals" 
                component={CategoryMeals} 
                options={(navigationData) => {
                    const catId = navigationData.route.params.categoryId;

                    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

                    return {
                        headerTitle: selectedCategory.title,
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                        headerTintColor: colors.primaryColor
                    }
                }}  
            />
            <Stack.Screen 
                name="MealDetails" 
                component={MealDetails} 
                options={(navigationData) => {
                    const mealId = navigationData.route.params.mealId;
                    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

                    return {
                        headerTitle: selectedMeal.title,
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                        headerTintColor: colors.primaryColor,
                        headerRight: () => (
                            <HeaderButton
                                name="ios-star-outline" 
                                onPress={() => {
                                    console.log('Egberto está aqui!!')
                                }}
                            />
                        )
                    }
                }}
            />
        </Stack.Navigator>
    );
};

const MealsFavTabNavigation = () => {
  
    const  Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    height: 55,
                    left: 0,
                    right: 0,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    elevation: 10
                }
            }}
        >
            <Tab.Screen 
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View 
                                style={{ alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Ionicons 
                                    name='ios-restaurant' 
                                    size={22} 
                                    color={focused ? colors.primaryColor : '#748c94'}
                                />
                                <Text
                                    style={{
                                        color: focused ? colors.primaryColor : '#748c94', 
                                        fontFamily: fonts.semi, 
                                        fontSize: 10
                                    }}
                                >
                                    Category
                                </Text>
                           </View>
                        );
                    }
                }}
                name="Meals" 
                component={MealsNavigation}
                 
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                           <View 
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                           >
                                <Ionicons 
                                    name='ios-star' 
                                    size={22} 
                                    color={focused ? colors.primaryColor : '#748c94'}
                                />
                                <Text
                                    style={{
                                        color: focused ? colors.primaryColor : '#748c94', 
                                        fontFamily: fonts.semi, 
                                        fontSize: 10
                                    }}
                                >
                                    Favorites
                                </Text>
                           </View>
                        );
                    }
                }}
                name="FavNavigation" 
                component={FavNavigation} 
            />
        </Tab.Navigator>
    );
};

export default MealsFavTabNavigation;
