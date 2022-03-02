import { useEffect, useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();


    // Google Sign in 
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, Googleprovider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // Object ovserver 

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])


    // sign out

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return {
        user,
        handleGoogleSignIn,
        error,
        logout
    }

}

export default useFirebase; 