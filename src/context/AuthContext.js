import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}){

    const [currentUser, setCurrentUser] = useState();

    const valuesToBeProvided = {
        currentUser, setCurrentUser,
    };

    return (
        <AuthContext.Provider value={valuesToBeProvided}>
            {children}
        </AuthContext.Provider>
    );
}
