import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import {Container, Title, List} from './styles';
import Appointment from '~/components/Appointments';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Appointments</Title>

        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({item}) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
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
