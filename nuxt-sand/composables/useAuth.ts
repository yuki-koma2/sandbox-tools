
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

export const useAuth = () => {
  //   const token = useState<string>('token', () => '')
  //   const auth = getAuth()
  //   auth.languageCode = 'jp'

  const signInWithGoogle = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result)
        // const googleAccessToken = credential?.accessToken ?? ''
        // The signed-in user info.
        const user = result.user
        user.getIdToken().then((idToken) => {
        //   token.value = idToken
          console.log(idToken)
        })
          .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.error(errorCode, errorMessage)
          })

        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(result)
      }).catch((error) => {
        // // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode, errorMessage)
        // // The email of the user's account used.
        // const email = error.customData.email
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  async function signIn (email: string, password: string) {
    const auth = getAuth()
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        user.getIdToken().then((idToken) => {
        //   token.value = idToken
          console.log(idToken)
        })
          .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.error(errorCode, errorMessage)
          }
          )
          .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.error(errorCode, errorMessage)
          })
      })
  }

  const signOut = async () => {
    const auth = getAuth()
    await auth.signOut()
    // token.value = ''
  }

  const signUp = async (email: string, password: string) => {
    const auth = getAuth()
    await new Promise<void>((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          userCredential.user
            .getIdToken()
            .then((idToken) => {
              console.log(idToken)
              //   token.value = idToken
              resolve()
            })
            .catch(reject)
        })
        .catch(reject)
    })
  }

  function checkAuthState () {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid
        console.log(uid)
        return true
      } else {
        // User is signed out
        // ...
        return false
      }
    })
  }

  return {
    signIn,
    signOut,
    checkAuthState,
    signInWithGoogle,
    signUp
  }
}
