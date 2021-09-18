import React, { useState, useEffect, createContext } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({children})=>{
    const [userData,setUserData] = useState(mockUser);
    const [userFollowers,setUserFollowers] = useState(mockFollowers);
    const [error,setError] = useState({show:false,msg:""})
    const [isLoading,setIsLoading] = useState(false)
    const errorBox = (show=false,msg="")=>{
        setError({show,msg})
    }
// - [Get User](https://api.github.com/users/wesbos)
// - [Followers](https://api.github.com/users/john-smilga/followers)

    const setSearchUser = async(user)=>{
        setIsLoading(true);
        errorBox()
        try {
            console.log(`${rootUrl}/${user}`,"ROOT!!!!")
            const {data} = await axios(`${rootUrl}/users/${user}`);
            setUserData(data)
            if(data){
                const {data:follower} = await axios(`${rootUrl}/users/${user}/followers`);
                setUserFollowers(follower);
            }
        } catch (error) {
            console.log(error,"ERROR!! - cancel")
            errorBox(true,"this name doesnt match")
        }finally{
            setIsLoading(false)
        }
    }
    return (
        <GithubContext.Provider value={{userData,userFollowers,setSearchUser,error}} > 
            {children}
        </GithubContext.Provider>
    )
}

export {GithubContext,GithubProvider};