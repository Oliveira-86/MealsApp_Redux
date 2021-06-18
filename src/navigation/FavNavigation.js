import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

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
                    }
                }}
            />
        </StacFav.Navigator>
    )
}

export default FavNavigation;
