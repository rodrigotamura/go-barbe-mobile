import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TInput} from './styles';

function Input({style, icon, ...rest}, ref) {
  /**
   * {style} is a property which we can receive, when we use Styled
   * Component in React Native, it store the stylization in a <style> tag
   */

  /**
   * {icon} is the reference of which icon will be implemented at this Input
   */

  /**
   * Using this component, we need to pass ref={} attribute to this Input, in order to
   * manipulate it (e.g. focusing). However this ref will not come within ...rest.
   *
   * What we need to do?
   *
   * 1. We will import { forwardRef } from 'react;
   * 2. We will add export default forwardRef(Input); at the end of this script
   * 3. Add the second parameter of this component Input({...}, ref);
   * 4. Add ref attribute in TInput: <TInput {...rest} ref={ref} />
   *
   * Now we can use this Input component using <Input ref={ref} /> and manipulate it.
   */

  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.5)" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {}, // when style is not required
};

export default forwardRef(Input);
