
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDR2_N-u0S1wAGSiAvidS1pt442ZDcaK7E",
//   authDomain: "job-portal-5820b.firebaseapp.com",
//   projectId: "job-portal-5820b",
//   storageBucket: "job-portal-5820b.appspot.com",
//   messagingSenderId: "389475483490",
//   appId: "1:389475483490:web:a5bb910423559bc47ef63b",
//   databaseURL : "https://job-portal-5820b-default-rtdb.asia-southeast1.firebasedatabase.app",
// };


// export const app = initializeApp(firebaseConfig);





//! creating a context for firebase  so that we use all firebase servises/methods in our app anywhere without again and again define the service we are simplely call the service form context . it is best way to use something which is need to use mutiple time and we are also create a usefirebase hook so that we dont need to call context in every file simple use esefirebase hook and do our work .