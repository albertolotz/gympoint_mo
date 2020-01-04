import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import CheckIn from './pages/CheckIn';
import GetHelp from './pages/GetHelp';

import NewAsk from './pages/NewAsk';
import SeeAnswer from './pages/SeeAnswer';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            CheckIn,
            Help: {
              screen: createStackNavigator({
                GetHelp,
                NewAsk,
                SeeAnswer,
              }),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Pedir Ajuda',
                tabBarIcon: <Icon name="live-help" size={40} color="#ee4d64" />,
              },
            },
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4d64',
              inactiveTintColor: '#ccc',
              style: {
                backgroundColor: '#fff',
                height: 70,
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
