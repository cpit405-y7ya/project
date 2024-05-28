import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const AuthButton = ()=>{
    const {user} = useAuth();

    return (<>
    {user?<Link to={'/signout'} className="authButton">خروج</Link>:<Link to={'/signin'} className="authButton">تسجيل الدخول</Link>}
    
    </>);
}