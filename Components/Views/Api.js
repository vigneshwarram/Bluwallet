import * as React from 'react';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { View, StyleSheet, KeyboardAvoidingView ,Text,Image,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import { Alert } from 'react-native';

    const getLink = () => {
        const url = 'https://apptest.supplynow.co.uk/api/v1/Candidate/Experiences'
        return url;
       };
       const Loginlink = () => {
        const url = 'https://apptest.supplynow.co.uk/api/v1/Authentication/Login'
        return url;
       };
    
      
       export default Loginlink;
       //export default getLink;

