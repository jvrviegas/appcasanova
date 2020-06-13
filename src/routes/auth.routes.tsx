import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Auth pages
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AddPhoneNumber from '../pages/SignUp/AddPhoneNumber';
import ValidatePhoneNumberSignUp from '../pages/SignUp/ValidatePhoneNumber';

const Stack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="AddPhoneNumber" component={AddPhoneNumber} />
    <Stack.Screen
      name="ValidatePhoneNumber"
      component={ValidatePhoneNumberSignUp}
    />
  </Stack.Navigator>
);

export default AuthRoutes;
