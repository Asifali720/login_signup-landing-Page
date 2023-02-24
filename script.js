// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

var logInContainer = document.getElementById('login')
var signUpContainer = document.getElementById('sign-up')
var logInBtn = document.getElementById('login-btn')
var signUpBtn = document.getElementById('sign-up-btn')
var backBtn = document.getElementById('back-btn')

signUpBtn.addEventListener('click', () => {
    logInContainer.style.opacity = '0'
    signUpContainer.style.display = 'block'
})

backBtn.addEventListener('click', () => {
    signUpContainer.style.display = 'none'
    logIn.style.opacity = '0.7'
})

function somethiing() {
    console.log("working... fine...")
}
// var submitBtn = document.getElementById('submit-btn')
// submitBtn.addEventListener('click', () => {
//     console.log(submitBtn)
// })




// import { getAuth, createUserWithEmailAndPassword } from "'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js'";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVhfrwFnym7scB4UDrfcL20_D68b8xyZs",
    authDomain: "login---sign-up-dbf7a.firebaseapp.com",
    databaseURL: "https://login---sign-up-dbf7a-default-rtdb.firebaseio.com",
    projectId: "login---sign-up-dbf7a",
    storageBucket: "login---sign-up-dbf7a.appspot.com",
    messagingSenderId: "1047678109218",
    appId: "1:1047678109218:web:9300f6607bcb2ada9bec7b",
    measurementId: "G-0YPKP3FEL1"
};



// // firebase.initializeApp(firebaseConfig)

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = app.auth()
const auth = getAuth(app);
const database = getDatabase();
// // firebase.initializeApp(firebaseConfig);
// // firebase.analytics();

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         // ...
//     })
// Get Firebase Auth instance
// var auth = firebase.auth();

// let submitBtn = document.getElementById('submit-btn')
// submitBtn.addEventListener('click', () => {
//     register()
// })
//     console.log("🚀 ~ file: index.html:93 ~ submitBtn.addEventListener ~ register()", register())

//function register
function signUp() {
    var firstName = document.getElementById('first-name').value
    var lastName = document.getElementById('last-name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var gender = document.getElementById('gender').value

    if (validateEmail(email) == false || validPassword(password) == false) {
        alert('plz input valid email and password')
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then(function () {
            var user = auth.currentUser

            var database_ref = ref(database, 'users/' + user.uid)

            var userData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password, 
            }

            set(database_ref, userData)

            alert('User created!!')
        })
        .catch(function (error) {
            var errorCode = error.Code
            var errorMessage = error.message

            alert(errorMessage)
        })
}

// function logIn(){
//     var email = document.getElementById('email').value
//     console.log("🚀 ~ file: script.js:120 ~ logIn ~ email :", email )
//     var password = document.getElementById('password').value
//     console.log("🚀 ~ file: script.js:122 ~ logIn ~ password:", password)

    
//     if (validateEmail(email) == false || validPassword(password) == false) {
//         alert('plz input valid email and password')
//         return
//     }
//     signInWithEmailAndPassword(auth, email, password)
//     .then(function (userCredential) {
//         const user = userCredential.user;

//         var database_ref = ref(database, 'users/' + user.uid)

//         var userData = {
//             email: email,
//             password: password,
//         }

//         update(database_ref, userData)

//         alert('User login!!')
//     })
//     .catch(function (error) {
//         var errorCode = error.Code
//         var errorMessage = error.message

//         alert(errorMessage)
//     })
// }
//     console.log("🚀 ~ file: script.js:149 ~ logIn ~ signInWithEmailAndPassword:", signInWithEmailAndPassword)
//     console.log("🚀 ~ file: script.js:149 ~ logIn ~ signInWithEmailAndPassword:", signInWithEmailAndPassword)

// // var logInBtn = document.getElementById('login')
// logInBtn.addEventListener('click', logIn)

var submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', signUp)

function validateEmail(email) {
    let expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true
    } else {
        return false
    }
}

function validPassword(password) {
    if (password < 8) {
        return false
    } else {
        return true
    }
}