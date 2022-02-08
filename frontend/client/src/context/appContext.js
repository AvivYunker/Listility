import React from 'react';
import { useState, useReducer, useContext } from 'react';

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
}

const AppContext = React.createContext();

const appProvider = ({children}) => {
    const [state, setState] = useState(initialState);
    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {appProvider, initialState, useAppContext};