import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Dashboard() {
  return <Background />;
}

// Customizing TabBarNavigation for this route
Dashboard.navigationOptions = {
  tabBarLabel: 'Appointments',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
  /**
   * {tintColor} comes from routes.js
   */
};
