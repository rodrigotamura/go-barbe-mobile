import React from 'react';
import {useSelector} from 'react-redux';
import {StatusBar} from 'react-native';

import createRouter from './routes';

// import { Container } from './styles';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Route = createRouter(signed);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#22202C" />
      <Route />
    </>
  );
}
