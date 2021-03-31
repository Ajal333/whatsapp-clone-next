import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "./login";
import { useEffect } from "react";
import firebase from "firebase";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          photoURL: user.photoURL,
          name: user.displayName,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loader />;

  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
