import { useContext } from "react"
import { Context } from "../../Context/Context"
import { Login } from "../login"
export const Home = () => {
    const {token} = useContext(Context)
    console.log(token)
    return(
        <div>
            <Login/>
        </div>
    )
}