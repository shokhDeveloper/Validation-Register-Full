import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context/Context";

export const Login = () => {
    const {emailTouched, setEmailTouched,passwordTouched, setPasswordTouched , emailError, setToken, setEmailError, passwordError, setPasswordError, formSub, setFormSub} = useContext(Context)
    // useEffect(() => {
    //     if(emailError === "" && passwordError === ""){
    //         setFormSub(true)
    //     }else{
    //         setFormSub(false)
    //     }
    // },[emailError, passwordError])
    // function handleSub(event){
    //     event.preventDefault()
      
    // }
    // function handleBlur(){
    //     setEmailTouched(true)
    // }
    // function handleKey(event){
    //     const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    //     if(re.test(String(event.target.value)) === true){
    //         setEmailError("")
    //     }else{
    //         setEmailError("Email yozilish tartibi xato")
    //     }
    // }
    // function handleBlur2(){
    //     setPasswordTouched(true)
    // }
    // function handleKey2(event){
    //     if(event.target.value.length > 3 && event.target.value.length < 8){
    //         setPasswordError("")
    //     }else{
    //         setPasswordError("Password dan yuqori va 8 dan kichik bulishi kerak")
    //     }
    // }
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    function handleSub(event){
        console.log(event)
    }
    function handleBlur(event){
        console.log(event.target.type)
        switch(event.target.type){
            case "email":{
                setEmailTouched(true)
            }
            break;
            case "password":{
                setPasswordTouched(true)
            }
        }
    }
    useEffect(() => {
        if(emailError === "" && passwordError === ""){
            setFormSub(true)
        }else{
            setFormSub(false)
        }
        
    },[emailError, passwordError])
    function handleKey(event){
        switch(event.target.type){
            case "password":{
                if(event.target.value.length >3 && event.target.value.length < 8){
                    setPasswordError("")
                }else{
                    setPasswordError("Parol 3 tadan katta yoki 8 dan kichik bulishi shart")
                }
            }break;
            case "email":{
                if(re.test(String(event.target.value))  === true){
                    setEmailError("")
                } else{
                    setEmailError("Email notugri")
                }  
            }
        }
    }
    function handleSub(event){
        event.preventDefault()
        const data = new FormData(event.target)
        axios({
            method: "POST",
            url: "https://reqres.in/api/register",
            data: {email: data.get("email"), password: data.get("password")}
        }).then(response =>{
            let {token} = response.data
            setToken(token)
        }).catch((error) => {
            console.log(error)
        })
    }
    return(
        <form  className="form-control w-50 mx-auto mt-4 text-center shadow" onSubmit={handleSub}>
            <h1 className="text-center">Ruyhattan o'ting</h1>
            <input onBlur={handleBlur} onKeyUp={handleKey} name="email" type="email" className="form-control m-2" />
            {emailTouched === true ? <span className="d-block text-danger my-2 text-start">{emailError}</span>: ""}
            <input type="password" onKeyUp={handleKey} name="password"  onBlur={handleBlur} className="form-control m-2" />
            {passwordTouched === true? <span className="d-block text-start text-danger my-2">{passwordError}</span>: ""}
            <button className={`${formSub !== true? "btn btn-primary m-2 disabled": "btn btn-primary"}`}>Submit</button>
        </form>
    )
}