import React from 'react';
import { useState, useReducer, useContext } from 'react';

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
}

<<<<<<< HEAD
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
=======
const appContext = React.createContext();

const appProvider = ({children}) => {
    const [state, setState] = useState(initialState);
    return <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {}

export {appProvider, initialState}
>>>>>>> 58161f15295df172ba74864488e293bf012409a6
