import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MEALS } from '../data/dummy-data';

import { createStackNavigator } from '@react-navigation/stack';

import HeaderButton from '../components/HeaderButton';

import Favorite from '../screens/FavoritesScreen';
import colors from '../styles/colors';

const StacFav = createStackNavigator();

const FavNavigation = () => {
    return (
        <StacFav.Navigator>
            <StacFav.Screen
                name="Favorite" 
                component={Favorite} 
                options={() => {

                    return {
                        headerTitle: "Your Favorite",
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
        </StacFav.Navigator>
    )
}

export default FavNavigation;
