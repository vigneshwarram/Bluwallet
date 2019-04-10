import firebase from 'firebase'; // 4.8.1

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () =>
    firebase.initializeApp({
      apiKey: 'AIzaSyBswQYtqeyfyYmBDzZkcNplLiXRN39S-ig',
    authDomain: 'loan-9e0b1.firebaseapp.com',
    databaseURL: 'https://loan-9e0b1.firebaseio.com',
    projectId: 'loan-9e0b1',
    storageBucket: '',
    messagingSenderId: '1015856519233'
    });

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('messages');
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };
  login = async(user, success_callback, failed_callback) => {
    await firebase.auth()
      .signInWithEmailAndPassword(user.email, user.password)
    .then(success_callback, failed_callback);
 }

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

  // close the connection to the Backend
  off() {
    this.ref.off();
  }
  createAccount = async (user) => {
    firebase.auth()
      .createUserWithEmailAndPassword(user.email, user.password)
    .then(function() {
      var userf = firebase.auth().currentUser;
      userf.updateProfile({ displayName: user.name})
      .then(function() {
        const { navigate } = this.props.navigation;
        navigate('Menu')
       // alert("User " + user.name + " was created successfully.");
      }, function(error) {
        console.warn("Error update displayName.");
      });
    }, function(error) {
      console.error("got error:" + error.message);
      alert("Create account failed.");
    });
  }
}

Fire.shared = new Fire();
export default Fire;
