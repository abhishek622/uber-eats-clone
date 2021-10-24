import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBFxpfy9Zg5Z4ZGDARNpl7d2SDbv5HvJLc",
	authDomain: "react-native-uber-eats-c-89ad9.firebaseapp.com",
	projectId: "react-native-uber-eats-c-89ad9",
	storageBucket: "react-native-uber-eats-c-89ad9.appspot.com",
	messagingSenderId: "1000735996905",
	appId: "1:1000735996905:web:4e7f970e3be95c1a926978",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
