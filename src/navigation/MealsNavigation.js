import React from 'react';
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackFilterNav from './StackFilterNav';
import DrawerContent from './DrawerContent';

import { CATEGORIES } from '../data/dummy-data';

import { Ionicons } from '@expo/vector-icons';

import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMealsScreen';
import MealDetails from '../screens/MealDetailsScreen';
import FavNavigation from './FavNavigation';

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Stack = createStackNavigator();

const MealsNavigation = ({ navigation }) => {



    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{
                    headerTitle: 'Category Meals',
                    headerStyle: {
                        backgroundColor: 'white',
                        elevation: 8,
                    },
                    headerTintColor: colors.primaryColor,
                    headerTitleAlign: 'center',
                    headerTitleStyle: fonts.bold,
                    headerLeft: () => (
                        <HeaderButton
                            name="ios-menu"
                            onPress={() => navigation.openDrawer()}
                            style={{ left: 10 }}
                            color={colors.primaryColor}
                            size={28}
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
                options={({ route }) => ({
                    title: route.params.mealTitle,
                    id: route.params.mealId,
                    headerBackTitle: "Back",
                  })}
            />
        </Stack.Navigator>
    );
};

export const MealsFavTabNavigation = () => {

    const Tab = createBottomTabNavigator();

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
                    tabBarIcon: ({ focused }) => {
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
                    tabBarIcon: ({ focused }) => {
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

const MainNav = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
            <Drawer.Screen name="Categories" component={MealsFavTabNavigation} />
            <Drawer.Screen name="Filters" component={StackFilterNav} />
        </Drawer.Navigator>
    )
}

export default MainNav;
