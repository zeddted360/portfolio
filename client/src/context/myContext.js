import React, { createContext } from 'react';

export const MyContext = createContext();

export const MyProvider = ({children}) => {
const data = {
    name:"zedd",
    age:29,
    isLoggedIn:true,
};
    return(
        <MyContext.Provider value={{...data}}>
            {children}
        </MyContext.Provider>
    )
};