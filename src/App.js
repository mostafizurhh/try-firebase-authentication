import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.init'
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({}) //to display user info
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error: ', error);
      })
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google SginIn</button>
      <div>
        <h5>Name: {user.displayName}</h5>
        <h6>Email: {user.email}</h6>
        <h6>Phone: {user.phoneNumber}</h6>
        <p>User ID: {user.uid}</p>
        <img src={user.photoURL} alt="" />
      </div>
    </div>
  );
}

export default App;
