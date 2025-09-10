import { useGoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import React from 'react'

const GoogleSignIn = () => {
    const login = useGoogleLogin({
        onSuccess:(credentialResponse) =>{
            console.log("RawResponse:",credentialResponse)
            if (credentialResponse.access_token){
                console.log("Acess Token:", credentialResponse.access_token);
            }else if(credentialResponse.credential){
                const userInfo= jwtDecode(credentialResponse.credential)
                console.log ("user Info:",userInfo)
            }
        },
        onError :() =>{
            console.log ("Login failed")
        }
    });
  return (
    <>
        <button type="button" className="btn"
            onClick={()=> login()}
            > 
            <img src="" alt="" />
        Sign in with Google
      </button>
    </>
  )
}

export default GoogleSignIn