import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image} from 'react-native';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';

import {signInRequest} from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({navigation}) {
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  /**
   * {navigation} is a native property from a component which is responsible from navigation
   */

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type your e-mail"
            returnKeyType="next" /* Appear 'next' button to go to next input */
            onSubmitEditing={() =>
              passwordRef.current.focus()
            } /** when click to submit in keyboard, password is focused */
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Type your password"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={() => handleSubmit()}>
            Sign in
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Create new account</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
