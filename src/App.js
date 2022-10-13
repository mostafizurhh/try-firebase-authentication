import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.init'
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({}) //to display user info
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error: ', error);
      });
  }

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser({});
    })
      .catch((error) => {
        setUser({});
      });
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
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

      {/* toggle button */}

      {user.uid ? <button onClick={handleSignOut}>Sign Out</button>
        :
        <>
          <button onClick={handleGoogleSignIn}>Google SginIn</button>
          <button onClick={handleGithubSignIn}>Github SginIn</button>
        </>
      }

      {/* if the user has uid, you will see the following div */}

      {user.uid &&
        <div>
          <h5>Name: {user.displayName}</h5>
          <h6>Email: {user.email}</h6>
          <h6>Phone: {user.phoneNumber}</h6>
          <p>User ID: {user.uid}</p>
          <img src={user.photoURL} alt="" />
        </div>}
    </div>
  );
}

export default App;
