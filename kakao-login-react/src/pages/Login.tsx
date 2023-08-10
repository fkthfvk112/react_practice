import {useNavigate} from 'react-router-dom';


export default function Login() {
  
  const kakaoLogin = ()=>{
    const clId:string =import.meta.env.VITE_KAKAO_RESTAPI_KEY;
    const redirectUrl:string = 'http://localhost:5173/';    
    const url:string = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clId}&redirect_uri=${redirectUrl}`;
    location.href= url;
  }

  return (
    <>
      <button onClick={kakaoLogin}>카카오 로그인</button>
    </>
  )
}
