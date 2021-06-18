import React, { useState, useEffect, useEffectLayout, useCallback} from 'react';
import { StyleSheet, Text, View, Switch, Platform } from 'react-native';

import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import HeaderButton from '../components/HeaderButton';

const FilterSwitch = (props) => {
    return (
        <View style={styles.filterContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <Switch
                trackColor={{ true: colors.primaryColor }}
                thumbColor={Platform.OS === 'android' ? colors.primaryColor : ''}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    )
}

const FiltersScreen = (props) => {

    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetaria: isVegetarian
        };

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffectLayout(() => {
        navigation.setOptions({
            headerRight: (props) => (
                <HeaderButton
                    {...props}
                    name="ios-save" 
                    onPress={props.navigation.route?.params.save}
                    style={{ marginRight: 15 }}
                    color={colors.primaryColor}
                    size={22}
                />
               )
        })
    }, [saveFilters])

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch 
                label="Gluten-Free"
                state={isGlutenFree}
                onChange={(newValue) => setIsGlutenFree(newValue)}                
            />
            <FilterSwitch 
                label="Lactose-Free"
                state={isLactoseFree}
                onChange={(newValue) => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label="Vegan" 
                state={isVegan}
                onChange={(newValue) => setIsVegan(newValue)}
            />
            <FilterSwitch
                label="Vegetarian" 
                state={isVegetarian}
                onChange={(newValue) => setIsVegetarian(newValue)}
            />
        </View>
    )
}

export default FiltersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    title: {
        fontFamily: fonts.bold,
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },

    label: {
        fontFamily: fonts.semi,
        fontSize: 18
    },  

    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "75%",
        marginVertical: 10
    }
});
