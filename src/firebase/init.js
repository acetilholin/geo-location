import firebase from 'firebase'
import firestore from 'firebase/firestore'


var config = {
    apiKey: "AIzaSyC4kKKkYHSkmw0GKwiNZfeO4xt2XvSkHwo",
    authDomain: "vue-geo-gk.firebaseapp.com",
    databaseURL: "https://vue-geo-gk.firebaseio.com",
    projectId: "vue-geo-gk",
    storageBucket: "vue-geo-gk.appspot.com",
    messagingSenderId: "295930793160"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots:true})

export default firebaseApp.firestore()