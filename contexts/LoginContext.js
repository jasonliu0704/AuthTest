import React from 'react';

const LoginContext = React.createContext({
    isLoggedIn: false,
    setIsLoggedIn: (value) => {}
})

export default LoginContext