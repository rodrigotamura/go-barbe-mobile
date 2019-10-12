import React, {useRef} from 'react';
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

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}
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
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail address"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => handleSubmit}
          />

          <SubmitButton onPress={() => {}}>Login</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Create new account</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
