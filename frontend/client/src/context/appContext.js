import React, {useReducer, useContext } from 'react'
import reducer from './reducer';
import { DISPLAY_ALERT } from './actions';

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
}

<<<<<<< HEAD
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const AppProvider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);
    }

    const displayAlert = () => {
        dispatch({type: DISPLAY_ALERT});
        clearAlert();
    }

    const clearAlert = () => {
        setTimeout(({ type: CLEAR_ALERT }) => {
            dispatch()
        }, 3000);
    }

    return (<AppContext.Provider value={{...state, displayAlert}}>
        {children}
    </AppContext.Provider>);
=======
const AppContext = React.createContext();

const appProvider = ({children}) => {
    const [state, setState] = useState(initialState);
    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    );
>>>>>>> 23fa156c031728480274de3ad3ad4641a561e2ed
}

const useAppContext = () => {
    return useContext(AppContext);
}

<<<<<<< HEAD
export { AppProvider, initialState, useAppContext }
=======
export {appProvider, initialState, useAppContext};
>>>>>>> 23fa156c031728480274de3ad3ad4641a561e2ed
