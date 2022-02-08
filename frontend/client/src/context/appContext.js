import React from 'react';
import { useState, useReducer, useContext } from 'react';

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
}

const appContext = React.createContext();

const appProvider = ({children}) => {
    const [state, setState] = useState(initialState);
    return <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {}

export {appProvider, initialState}