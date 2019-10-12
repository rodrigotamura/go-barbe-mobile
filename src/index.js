import React from 'react';
import {StatusBar} from 'react-native';

import Route from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#22202C" />
      <Route />
    </>
  );
}
