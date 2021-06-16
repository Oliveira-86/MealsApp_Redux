import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import {
    Avatar,
    Text,
    Drawer,
    Title,
    Caption
} from 'react-native-paper';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { Feather } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import fonts from '../styles/fonts';
import HeaderButton from '../components/HeaderButton';
import colors from '../styles/colors';


const DrawerContent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.container}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{ uri: 'https://github.com/oliveira-86.png' }}
                                size={50}
                            />

                            <View style={{ marginLeft: 15 }}>
                                <Title style={styles.title}>Egberto Oliveira</Title>
                                <Caption style={styles.caption}>@beto.duarte.14</Caption>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Categories')}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View>
                                <HeaderButton 
                                    name="ios-restaurant-outline"
                                    size={22}
                                    color="#2c2c2c"
                                />
                            </View>
                            <Text style={styles.label}>
                                Categoties Meals
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Filters')}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 18 }}>
                            <View>
                                <Feather 
                                    name="filter"
                                    size={22}
                                    color="#2c2c2c"
                                />
                            </View>
                            <Text style={[styles.label, { marginLeft: 22 }]}>
                                Filters
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}

export default DrawerContent;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    userInfoSection: {
        paddingLeft: 20
    },

    title: {
        fontFamily: fonts.bold,
        color: "#2c2c2c",
        fontSize: 18
    },

    label: {
        fontFamily: fonts.semi,
        color: "#2c2c2c",
        fontSize: 14
    },  

    caption: {
        fontFamily: fonts.regular
    },

    bottomDrawerSection: {
        marginTop: 15,
        borderColor: "#f4f4f4",
        borderTopWidth: 1
    }
});
