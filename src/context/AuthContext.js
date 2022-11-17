import { createContext, useEffect, useState } from "react";


const AuthContext = createContext({
    isAuthenticated: false
})

function AuthContextProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, setIsAuthenticated }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }