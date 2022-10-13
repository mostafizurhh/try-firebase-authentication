import './App.css';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from './firebase/firebase.init'

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log('hello')
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google SginIn</button>
    </div>
  );
}

export default App;
