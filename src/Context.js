import { useReducer } from "react";
import { createContext } from "react";


export const themeContext=createContext()
const initailstate={darkMode:false};

const themeReducer=(state,action)=>{
    switch(action.type){
        case 'toggle':
        return{darkMode:!state.darkMode}
        default:
            return state;
    }
}
export const ThemeProvider=(props)=>{
    const [state,dispatch]=useReducer(themeReducer,initailstate);
    return <themeContext.Provider value={{state,dispatch}}>
        {props.children}
    </themeContext.Provider>
}
