import React, { useReducer } from "react";
import AlertReducer from "../reducers/alertReducer";

export const AlertContext = React.createContext();

const AlertContextProvider = (props) => {
    const [state, dispatch] = useReducer(AlertReducer, null);

    const displayAlert = (msg, type) => {
        dispatch({ type: "SET_ALERT", error: { msg, type } });
    
        setTimeout(() => {
          dispatch({ type: "REMOVE_ALERT" });
        }, 3000);
    }

    return (
        <AlertContext.Provider value={{
            error: state,
            displayAlert
        }}>
            { props.children }
        </AlertContext.Provider>
    );
}

export default AlertContextProvider;