import React, {useRef} from 'react';
import {Image} from 'react-native';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';

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
  /**
   * {navigation} is a native property from a component which is responsible from navigation
   */

  function handleSubmit() {}
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
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Type your password"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
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
