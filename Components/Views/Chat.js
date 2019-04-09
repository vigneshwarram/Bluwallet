// @flow
import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Fire from './Fire';

type Props = {
  name?: string,
};

class Chat extends React.Component<Props> {

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.navigation.state.params.name,
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
      <View style={ styles.container }>
     
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
      </View>
    );
  }

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}
var styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
  },
  loginForm: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
  },
});
export default Chat;
