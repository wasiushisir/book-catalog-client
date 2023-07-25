import { useEffect } from "react";

import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { useAppDispatch } from "./redux/hook";
import { setLoading, setUser } from "./redux/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./utils/firebase";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // ...
      } else {
        dispatch(setLoading(false));
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
