import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { AuthStateHook } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDW2NG9G6tRok4IPEI3PdUvI-ndEct6cKo",
  authDomain: "reactyg-firebase-auth.firebaseapp.com",
  databaseURL: "https://reactyg-firebase-auth-default-rtdb.firebaseio.com",
  projectId: "reactyg-firebase-auth",
  storageBucket: "reactyg-firebase-auth.appspot.com",
  messagingSenderId: "1094389088976",
  appId: "1:1094389088976:web:49ba21951ef5d8b9a414d5"  // Your firebase config
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  
  const [user] = AuthStateHook(auth);

return (
  <div className="App">
    <header>
      <h1>⚛️🔥💬</h1>
      <SignOut />
    </header>

    <section>
      {user ? <ChatRoom /> : <SignIn />}
    </section>
  </div>
  );
}



function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (    
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}



function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}



  function ChatRoom(props) {
    const { text, uid } = props.message;
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = React.useState('');
  
    return (
      (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}
  
  export default App;