importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyD63vRGyB2AWCGtuJZomCrBlQdafCeqsw8",
    authDomain: "webapp-756dd.firebaseapp.com",
    projectId: "webapp-756dd",
    storageBucket: "webapp-756dd.firebasestorage.app",
    messagingSenderId: "565018104397",
    appId: "1:565018104397:web:300305431f7128a0bd8204",
});

const messaging = firebase.messaging();
