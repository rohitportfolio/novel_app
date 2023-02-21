/**
 * Novel App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {I18nextProvider as InternationalizationProvider} from 'react-i18next';
import i18n from '../shared/internationalization';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard/dashboard';
import Profile from '../screens/Profile/profile';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <InternationalizationProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Details">
          <Stack.Screen name="Home" component={Dashboard} />
          <Stack.Screen
            name="Details"
            component={Profile}
            options={{title: 'Overview'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </InternationalizationProvider>
  );
}

export default App;
