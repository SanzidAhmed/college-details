import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { createContext } from "react";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser =(email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoading(true)
        signOut(auth)
    }
    const authInfo = {
        loading,
        setLoading,
        createUser,
        signInUser,
        signOutUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;