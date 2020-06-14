import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useAuth } from '../../hooks/auth';

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
});

const CustomDrawerContent: React.FC = (props: any) => (
  <DrawerContentScrollView {...props}>
    <DrawerItem
      icon={() => <Icon name="menu" size={24} color={'#E89353'} />}
      label=""
      onPress={() => {
        props.navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }}
    />
    <View style={styles.lineStyle} />
    <DrawerItem
      icon={() => <Icon name="account-outline" size={24} color={'#E89353'} />}
      label="Perfil"
      labelStyle={{
        color: '#E89353',
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 18,
      }}
      onPress={() => {
        props.navigation.navigate('Profile');
      }}
    />
    <View style={styles.lineStyle} />
    <DrawerItem
      icon={() => (
        <Icon name="credit-card-multiple" size={24} color={'#E89353'} />
      )}
      label="Minhas solicitações"
      labelStyle={{
        color: '#E89353',
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 18,
      }}
      onPress={() => {
        props.navigation.navigate('LoanHistory');
      }}
    />
    <View style={styles.lineStyle} />
    <DrawerItem
      icon={() => <Icon name="credit-card-plus" size={24} color={'#E89353'} />}
      label="Solicitar empréstimo"
      labelStyle={{
        color: '#E89353',
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 18,
      }}
      onPress={() => {
        props.navigation.navigate('RequestLoan');
      }}
    />
    <View style={styles.lineStyle} />
    <DrawerItem
      icon={() => <Icon name="exit-to-app" size={24} color={'#E89353'} />}
      label="Sair"
      labelStyle={{
        color: '#E89353',
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 18,
      }}
      onPress={useAuth().signOut}
    />
    <View style={styles.lineStyle} />
  </DrawerContentScrollView>
);

export default CustomDrawerContent;
