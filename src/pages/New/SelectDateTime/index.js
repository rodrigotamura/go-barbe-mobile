import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import {Container} from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}

// Options for Stack Nav
/**
 * SelectProvider.navigationOptions became a function, only because we need {navigation}
 * If not for that, is not necessary to declare ({navigation}) =>
 */
SelectDateTime.navigationOptions = ({navigation}) => ({
  title: 'Select the time',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="arrow-back" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
