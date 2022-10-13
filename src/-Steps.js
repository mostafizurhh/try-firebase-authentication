/* 
1. visit : console.firebase.google.com
2. create a new firebase project
3. visit (go to docs) section
4. vist (Build > Authintication > Web > Get Started)
5. for the 1st time go to (install the Firebase JS SDK and initialize Firebase.)
6. click Register your app and follow the procedure
7. from terminal go to your project folder and write (npm install firebase) 
8. Dangerious: get firebase config and put it in firebase.init.js (do not create a public project in git hub)
9. in firebase.init.js write (export default app) as the last line.
10. create (auth) using getAuth fromfirebase by using app from firebase.init.js >> (const auth = getAuth(app))
11. create a google auth provider >> (const provider = new GoogleAuthProvider())
12. go to firebase >Build > Authentication > Sign in method > Google > enable
13. create button and onclick function to handle click operation

*/