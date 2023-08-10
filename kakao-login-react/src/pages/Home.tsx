import axios from 'axios';
import {useEffect, useState} from 'react'

async function getKakaoUserInfo(accessToken:string){
    const headers = {
        Authorization: `Bearer ${accessToken}`
    }
    let userInfo = await axios.get(`https://kapi.kakao.com/v2/user/me`, {headers})
    console.log('유저 정보', userInfo.data);

    return userInfo.data;
}

function setKakaoToken(authCode:string|null){
    if(authCode === null) return;
    const headers  = {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }

    const requestBody ={
        'grant_type':'authorization_code',
        'client_id':import.meta.env.VITE_KAKAO_RESTAPI_KEY,
        'redirect_uri':'http://localhost:5173/',
        'code':authCode
    }
    
    axios.post('https://kauth.kakao.com/oauth/token', requestBody, {headers})
        .then((res)=>{
            console.log("Success : ", res.data);
            getKakaoUserInfo(res.data.access_token)
            //카카오 유저 정보가 유효할 경우 실제 로그인 처리
        })
        .catch((e)=>{
            console.log("Error : ", e);
        })
}

export default function Home(){
    const [authCode, setAuthCode] = useState<string|null>(null);

    useEffect(()=>{
        const queryString:string = window.location.search;
        const urlParams:URLSearchParams = new URLSearchParams(queryString);
        const code:string|null = urlParams.get('code');
        setAuthCode(code);
    }, [])

    useEffect(()=>{
        setKakaoToken(authCode);
    }, [authCode])
    
    return(
        <h1>Home</h1>
    )
}