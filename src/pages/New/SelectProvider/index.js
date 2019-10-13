import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function SelectProvider() {
  return <Background />;
}

// Options for Stack Nav
/**
 * SelectProvider.navigationOptions became a function, only because we need {navigation}
 * If not for that, is not necessary to declare ({navigation}) =>
 */
SelectProvider.navigationOptions = ({navigation}) => ({
  title: 'Select the provider',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
