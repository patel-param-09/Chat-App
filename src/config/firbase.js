// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8qUrQ9Ne8lIOvu31Q6KCudmjY6UL0KeE",
  authDomain: "chat-app-e350a.firebaseapp.com",
  projectId: "chat-app-e350a",
  storageBucket: "chat-app-e350a.appspot.com",
  messagingSenderId: "866301109740",
  appId: "1:866301109740:web:40ee8b95e47f97e0538cc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (username, email, password) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,email, password);
        const user = userCredential.user;
        await setDoc(doc(db, "Users", user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey, There I am Using Chat App",
            lastSeen:Date.now()
        })
        await setDoc(doc(db, "chats", user.uid),{
            chatData:[]
        })
    }catch(error){
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
} 

const login = async (email, password)=>{
    try{
        const userCredential = await signInWithEmailAndPassword(auth,email,password);

    }catch(error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logOut = async ()=>{
    try{
        await signOut(auth)
    }catch(error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

export {signUp, login, logOut, auth, db}