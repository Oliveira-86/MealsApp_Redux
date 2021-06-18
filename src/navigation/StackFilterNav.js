import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Filters from '../screens/FiltersScreen';
import HeaderButton from '../components/HeaderButton';

import colors from '../styles/colors';

const StackFilter = createStackNavigator();

const StackFilterNav = ({ navigation }) => {  

    return (
        <StackFilter.Navigator>
            <StackFilter.Screen 
                name="Filter" 
                component={Filters} 
                options={{
                    headerTitle: 'Filters',
                    headerStyle: {
                        backgroundColor: 'white',
                        elevation: 8, 
                    },
                    headerTintColor: colors.primaryColor,
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <HeaderButton
                            name="ios-menu" 
                            onPress={() => navigation.openDrawer()}
                            style={{ marginRight: 15 }}
                            color={colors.primaryColor}
                            size={22}
                        />
                    ),
                   headerRight: () => (
                    <HeaderButton
                        name="ios-save" 
                        onPress={navigation.route?.params.save}
                        style={{ marginRight: 15 }}
                        color={colors.primaryColor}
                        size={22}
                    />
                   )
                }}
            />
        </StackFilter.Navigator>
    );
}

export default StackFilterNav;
