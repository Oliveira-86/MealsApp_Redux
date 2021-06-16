import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

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
                    headerLeft: (props) => (
                        <HeaderButton
                            name="ios-menu" 
                            onPress={() => props.navigation.openDrawer()}
                            style={{ marginRight: 15 }}
                            color={colors.primaryColor}
                            size={22}
                        />
                    ),
                   headerRight: (props) => (
                    <HeaderButton
                        name="ios-save" 
                        onPress={props.navigation.getParam('save')}
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
