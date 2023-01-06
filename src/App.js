import { useContext, useEffect, useState } from "react";
import { Context, ProviderContext } from "./Context/Context";
import { Home } from "./Pages/Home";
import { Home as Good } from "./Good";
function App(){
  const {token} = useContext(Context)
  return(
    <div className="App">
        {token !== null? <Good/>: <Home/>}
    </div>
  )
}
export default App;