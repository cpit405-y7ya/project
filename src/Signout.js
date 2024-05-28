import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Signout = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  signOut(auth)
    .then(() => {
        navigate('/');
    }).catch((error) => {
    });
};
