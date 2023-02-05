import {initializeApp} from "firebase/app";
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApEcWRbBruesHY8UgAdb-q9z-xm7490tg",
    authDomain: "vue-demo-c1715.firebaseapp.com",
    databaseURL: "https://vue-demo-c1715-default-rtdb.firebaseio.com",
    projectId: "vue-demo-c1715",
    storageBucket: "vue-demo-c1715.appspot.com",
    messagingSenderId: "961211608211",
    appId: "1:961211608211:web:ea7f7d92be6753ac4ef166"
};

// Initialize Firebase
initializeApp(firebaseConfig);
