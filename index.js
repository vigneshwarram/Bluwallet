/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import firebase from 'firebase';
import {name as appName} from './app.json';
var config = {
    databaseURL: "https://chatapp-7f3ef.firebaseio.com/",
    projectId: "chatapp-7f3ef",
};
firebase.initializeApp(config);
AppRegistry.registerComponent(appName, () => App);
