/* @flow */

//import { BackAndroid, Linking } from 'react-native';
//export { BackAndroid, Linking };

import {
    BackAndroid as DeprecatedBackAndroid,
    BackHandler,
    Linking,
} from 'react-native';

const BackAndroid = BackHandler || DeprecatedBackAndroid;
export { BackAndroid, Linking };
