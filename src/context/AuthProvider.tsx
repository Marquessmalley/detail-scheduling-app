import { createContext, useState, useEffect, useContext } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
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
  signUp: (userName: string, email: string, password: string) => void;
  signUserOut: () => void;
  loading: boolean;
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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FirebaseError | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
          setLoading(false);
        });

        return () => unsubscribe();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // FIREBASE LOGIN
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err: any) {
      setError({ code: err.code, name: err.name, message: err.message });
    }
  };

  // FIREBASE SIGN UP
  const signUp = async (userName: string, email: string, password: string) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCred.user;
      await updateProfile(user, {
        displayName: userName,
      });
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

  return (
    <AuthContext.Provider
      value={{ user, login, signUp, signUserOut, loading, error, setError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
