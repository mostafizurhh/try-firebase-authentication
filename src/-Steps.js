/* 
--------------
INITIAL SETUP
--------------
1. visit : console.firebase.google.com
2. create a new firebase project
3. visit (go to docs) section
4. vist (Build > Authintication > Web > Get Started)
5. for the 1st time go to (install the Firebase JS SDK and initialize Firebase.)
6. click Register your app and follow the procedure
7. from terminal go to your project folder and write (npm install firebase) 
8. Dangerious: get firebase config and put it in firebase.init.js (do not create a public project in git hub)
9. in firebase.init.js write (export default app) as the last line.
--------------------
SETUP AUTH PROVIDER
--------------------
10. create (auth) using getAuth fromfirebase by using app from firebase.init.js >> (const auth = getAuth(app))
11. create a google auth provider >> (const provider = new GoogleAuthProvider())
12. go to firebase >Build > Authentication > Sign in method > Google > enable
13. create button and onclick function to handle click operation
14. inside button handler function write the following:  
signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error('error: ', error);
      })
------------------
DISPLAY USER DATA
------------------
15. set state under function app >> const [user, setUser] = useState({})
16. set user under signInWithPopup >> setUser(user)
17. create a div under the button and show info you want like bellow>> 
<div>
<h5>Name: {user.displayName}</h5>
<h6>Email: {user.email}</h6>
</div>

---------------
Handle Sign Out
---------------
18. craete a button with onclick function and create a function >> const handleSignOut = () => 
{
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser({});
    })
      .catch((error) => {
        setUser({});
      });
}

--------------------------------
Toggle Button (SignIn & SignOut)
--------------------------------
19. write following >>
{
    user.email ? <button onClick={handleSignOut}>Sign Out</button>
        :
        <button onClick={handleGoogleSignIn}>Google SginIn</button>
}
*/