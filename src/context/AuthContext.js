import { useContext, createContext, useState, useEffect } from "react"
import { auth, db } from "../firebaseConfig"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { setDoc, doc } from "firebase/firestore"

const AuthContext = createContext()

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({})
  async function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    await setDoc(doc(db, "users", email), { savedMovies: [] })
  }
  function logOut() {
    return signOut(auth)
  }
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  })
  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function UserAuth() {
  return useContext(AuthContext)
}
