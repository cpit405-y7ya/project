import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = ()=>useContext(AuthContext);
export default function AuthProvider({children}){
    const [user,setUser] = useState('');

    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    );
}