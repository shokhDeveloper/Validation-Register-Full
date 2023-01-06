import { createContext, useEffect } from "react";
import {useState} from "react"
export const Context = createContext()

export const ProviderContext = ({children}) => {
    const [token, setToken] = useState( window.localStorage.getItem("token_validation") !== null? window.localStorage.getItem("token_validation"): null)
    const [emailTouched, setEmailTouched] = useState(false) // tegmoq => focus
    const [passwordTouched, setPasswordTouched] = useState(false)
    const [emailError, setEmailError] = useState("Email yozish majburiy hurmatli mijoz")
    const [passwordError, setPasswordError] = useState("Password yozish majburiy hurmatli mijoz")
    const [formSub, setFormSub] = useState(false)
    useEffect(() => {
        if(token !== null){
            window.localStorage.setItem("token_validation", token)
        }
    },[token])
    return(
        <Context.Provider value={{emailTouched, setEmailTouched,passwordTouched, setPasswordTouched , emailError, setEmailError, passwordError, setPasswordError, formSub, setFormSub, token, setToken}}>
            {children}
        </Context.Provider>
    )
}