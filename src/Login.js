import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

export const Login = () => {
  const navigate = useNavigate();

  function handleGoogleAuth() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;

        navigate("/", { replace: true });
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  return (
    <>
    <div className="authentication event">
      <p className="authenticationTitle">Login Using google</p>
      <div className="authentication">
      <GoogleButton onClick={handleGoogleAuth} />
      </div>
    </div>
    </>
  );
};
