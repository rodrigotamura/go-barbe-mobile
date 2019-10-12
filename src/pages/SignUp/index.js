import React from 'react';
import {Image} from 'react-native';

import logo from '~/assets/logo.png';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({navigation}) {
  /**
   * {navigation} is a native property from a component which is responsible from navigation
   */
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Full name"
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail address"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
          />

          <SubmitButton onPress={() => {}}>Login</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Create new account</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
