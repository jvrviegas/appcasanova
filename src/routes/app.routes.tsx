import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';

// Profile pages
import Profile from '../pages/Profile';
import RegistrationDataForm from '../pages/Profile/RegistrationDataForm';
import SavedCreditCardForm from '../pages/Profile/SavedCreditCardForm';
import SavedPhoneForm from '../pages/Profile/SavedPhoneForm';
import ValidatePhoneNumber from '../pages/Profile/ValidatePhoneNumber';
// Request loan pages
import RequestLoan from '../pages/RequestLoan/Request';
import CreditCardForm from '../pages/RequestLoan/CreditCardForm';
import ChangeCreditCard from '../pages/RequestLoan/ChangeCreditCard';
import ConfirmLoan from '../pages/RequestLoan/ConfirmLoan';
// Loan history pages
import LoanHistory from '../pages/LoanHistory';
import LoanDetails from '../pages/LoanHistory/LoanDetails';
// Splash screen components
import SavedCardSplashScreen from '../components/SavedCardSplashScreen';
import ShadedSuccessSplashScreen from '../components/ShadedSuccessSplashScreen';
import SimpleSuccessSplashScreen from '../components/SimpleSuccessSplashScreen';

import CustomDrawerContent from '../components/CustomDrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreens = ({ navigation }: any) => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#f3903d',
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
        elevation: 0,
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Olá, Maria!',
        headerTitleStyle: { fontFamily: 'HelveticaNeue-Medium', fontSize: 22 },
        headerRight: () => (
          <Icon.Button
            name="menu"
            size={28}
            backgroundColor="#f3903d"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        title: '',
        headerTintColor: '#f3903d',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: 'transparent',
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
          elevation: 0,
        },
        headerBackTitle: ' ',
        headerBackImage: () => (
          <Icon
            name="chevron-left"
            size={35}
            color="#f3903d"
            style={{ marginLeft: 10 }}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="menu"
            size={28}
            color="#f3903d"
            backgroundColor="#fff"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <Stack.Screen
      name="RegistrationDataForm"
      component={RegistrationDataForm}
      options={{
        title: '',
        headerTintColor: '#f3903d',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: 'transparent',
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
          elevation: 0,
        },
        headerBackTitle: ' ',
        headerBackImage: () => (
          <Icon
            name="chevron-left"
            size={35}
            color="#f3903d"
            style={{ marginLeft: 10 }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="SavedCreditCardForm"
      component={SavedCreditCardForm}
      options={{
        title: '',
        headerTintColor: '#f3903d',
        headerBackTitle: ' ',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: 'transparent',
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
          elevation: 0,
        },
        headerBackImage: () => (
          <Icon
            name="chevron-left"
            size={35}
            color="#f3903d"
            style={{ marginLeft: 10 }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="SavedPhoneForm"
      component={SavedPhoneForm}
      options={{
        title: '',
        headerTintColor: '#f3903d',
        headerBackTitle: ' ',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: 'transparent',
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
          elevation: 0,
        },
        headerBackImage: () => (
          <Icon
            name="chevron-left"
            size={35}
            color="#f3903d"
            style={{ marginLeft: 10 }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="ValidatePhoneNumber"
      component={ValidatePhoneNumber}
      options={{
        title: '',
        headerBackTitle: ' ',
        headerStyle: {
          backgroundColor: '#f3903d',
          shadowColor: 'transparent',
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
          elevation: 0,
        },
        headerBackImage: () => (
          <Icon
            name="chevron-left"
            size={35}
            color="#fff"
            style={{ marginLeft: 10 }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="LoanHistory"
      component={LoanHistory}
      options={{
        title: '',
        headerTintColor: '#f3903d',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: 'transparent',
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
          elevation: 0,
        },
        headerBackTitle: ' ',
        headerBackImage: () => (
          <Icon
            name="chevron-left"
            size={35}
            color="#f3903d"
            style={{ marginLeft: 10 }}
          />
        ),
        headerRight: () => (
          <Icon.Button
            name="menu"
            size={28}
            color="#f3903d"
            backgroundColor="#fff"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <Stack.Screen
      name="LoanDetails"
      component={LoanDetails}
      options={{
        headerTitle: '',
        headerBackTitle: ' ',
        headerBackImage: () => (
          <Icon
            name="chevron-left"
            size={35}
            color="#fff"
            style={{ marginLeft: 10 }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="RequestLoan"
      component={RequestLoan}
      options={{
        headerTitle: '',
        headerBackTitle: ' ',
        headerBackImage: () => (
          <Icon
            name="chevron-left"
            size={35}
            color="#fff"
            style={{ marginLeft: 10 }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="CreditCardForm"
      component={CreditCardForm}
      options={{
        headerTitle: '',
        headerBackTitle: ' ',
        headerBackImage: () => (
          <Icon
            name="chevron-left"
            size={35}
            color="#fff"
            style={{ marginLeft: 10 }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="ChangeCreditCard"
      component={ChangeCreditCard}
      options={{
        headerTitle: '',
        headerBackTitle: ' ',
        headerBackImage: () => (
          <Icon
            name="chevron-left"
            size={35}
            color="#fff"
            style={{ marginLeft: 10 }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="ConfirmLoan"
      component={ConfirmLoan}
      options={{
        headerTitle: '',
        headerBackTitle: ' ',
        headerBackImage: () => (
          <Icon
            name="chevron-left"
            size={35}
            color="#fff"
            style={{ marginLeft: 10 }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="SavedCardSplashScreen"
      component={SavedCardSplashScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ShadedSuccessSplashScreen"
      component={ShadedSuccessSplashScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SimpleSuccessSplashScreen"
      component={SimpleSuccessSplashScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const AppRoutes: React.FC = () => (
  <Drawer.Navigator
    drawerPosition="right"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name="Home" component={HomeStackScreens} />
  </Drawer.Navigator>
);

export default AppRoutes;
