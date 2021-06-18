import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Provider } from 'react-redux';
import mealsReducer from './src/store/reducers/meals';
import { createStore, combineReducers } from 'redux';

import { NavigationContainer } from '@react-navigation/native';
import MealsNavigation from './src/navigation/MealsNavigation';

import { 
  useFonts, 
  OpenSans_400Regular, 
  OpenSans_600SemiBold, 
  OpenSans_700Bold 
} from '@expo-google-fonts/open-sans';

import AppLoading from 'expo-app-loading';


const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MealsNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}


