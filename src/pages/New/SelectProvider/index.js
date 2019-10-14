import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import {Container, ProvidersList, Provider, Avatar, Name} from './styles';
import api from '../../../services/api';

export default function SelectProvider({navigation}) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    (async function loadProviders() {
      const response = await api.get('providers');

      setProviders(response.data);
    })();
  }, [setProviders]);

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          ketExtractor={provider => String(provider.id)}
          renderItem={({item: provider}) => (
            <Provider
              onPress={() => navigation.navigate('SelectDateTime', {provider})}>
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
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
      <Icon name="arrow-back" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
