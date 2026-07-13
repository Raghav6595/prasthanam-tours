import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedToken = localStorage.getItem("adminToken");
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    const login = (jwtToken) => {
        localStorage.setItem("adminToken", jwtToken);
        setToken(jwtToken);
    };

    const logout = () => {
        localStorage.removeItem("adminToken");
        setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                isAdmin: !!token,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}