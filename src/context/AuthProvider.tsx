import { createContext, useState, useEffect, useContext } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "firebaseConfig";
import { useNavigate } from "react-router-dom";

interface FirebaseError {
  code?: string;
  name?: string;
  message?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  signUserOut: () => void;
  error: FirebaseError | null;
  setError: (error: FirebaseError | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
interface AuthProps {
  children: React.ReactNode;
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("Must be used within auth provider");
  }

  return context;
};

const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<FirebaseError | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    return () => unsubscribe();
  }, []);

  // FIREBASE LOGIN
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err: any) {
      console.log("login error:");
      console.log(err.code);
      console.log(err.name);
      console.log(err.message);
      setError({ code: err.code, name: err.name, message: err.message });
    }
  };

  // FIREBASE SIGN UP
  const signUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("sign up sucess");
      navigate("/admin");
    } catch (err: any) {
      setError({ code: err.code, name: err.name, message: err.message });
    }
  };

  // FIREBASE SIGN OUT
  const signUserOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  // const handleError = (err: AuthError) => {
  //   const errorCode = err.code;
  //   const errorMessage = err.message;

  //   // Handle specific error codes
  //   if (errorCode === 'auth/weak-password') {
  //     setError(errorMessage);
  //   } else {
  //     setError('An error occurred during authentication.');
  //   }
  //   console.error(err);
  // };

  return (
    <AuthContext.Provider
      value={{ user, login, signUp, signUserOut, error, setError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
