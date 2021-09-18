import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login = ()=>{
    const {loginWithRedirect} = useAuth0();
    return(
        <div className="login">
            <h3>LOGIN</h3>
            <button  onClick={loginWithRedirect}>
                login to check out 
            </button>
        </div>
    )
}
export default Login;