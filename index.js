/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import firebase from 'firebase';
import {name as appName} from './app.json';
var config = {
    databaseURL: "https://loan-9e0b1.firebaseio.com",
    projectId: "chatapp-7f3ef",
};
if (!firebase.apps.length) {
    firebase.initializeApp({});
}
AppRegistry.registerComponent(appName, () => App);
