# About

Welcome! This is **GoBarber - Clients App**!

Basically it is an application made with React Native with several features and resources. GoBarber - Clients App is consuming [GoBarber API](https://github.com/rodrigotamura/go-stack-2019/tree/master/module02), made with Express Framework.

# Configuring root import

Every time we want to call some file in our scripts, like:

```javascript
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
```

We must indicate `../.../../../` 😓 every time! And it is very boring to do that!

However, if we want to simplify this process making it less boring. We will implement **Babel Plugin Root Import**, as we have implemented in GoBarber - Providers App. For further details to install it, [click here](https://github.com/rodrigotamura/go-barber-web#using-root-import).

**Note**: in this React Native project is not necessary to install and config **Customize CRA** neither **REact App Rewired** as we did in GoBarber - Providers App.

Open [babel.config.js](./babel.config.js) and add the following code lines:

```javascript
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ],
};
```

# Jetifier and Android X

After React Native version 0.60 has launched, it has given support to the Android's new architecture called _Android X_ and not all libraries installed in our application are ready for Adroid X's support. So, the React Native's team created a library called **Jetifier**, which will make a scan and fix every library that is not updated (e.g. React Native Gesture Handler). Maybe nowadays React Native Gesture Handler could be fixed giving support for Android X.

1. Install `yarn add jetifier -D`;
2. Run `yarn run jetify` to fix the Android X support problem for every installed libraries.

It is necessary now to run this command every moment that we install a new dependency. For that we will open [package.json](./package.json) and add the following line code within `scripts`:

```javascript
"scripts": {
    // ... ///
    "postinstall": "jetify"
  },
```

- `postinstall` will run this script after we install a new dependency.

# React Navigation

Please, [click here](https://github.com/rodrigotamura/go-stack-2019/tree/master/module03/react_native_project#react-navigation) for further details.

In the first moment, at Login's page, our application will not show the menu, because we will show it only when user is logged in.
So, let's install **Switch Navigator** (which is a kind of navigation that does not have any visual effect, user can not have any button to return at the previous route). Import it within [src/routes.js](./src/routes.js).

In this project we will use the **Bottom Tab Navigator**:

1. Install it by `yarn add react-navigation-tabs`;
2. And import it within [routes.js](./routes.js);
