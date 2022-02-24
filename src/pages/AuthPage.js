import React from 'react'
import HeaderWhite from '../components/HeaderWhite';

const AuthPage = () => {

    const handleAuthBtnClick = () =>{
        let tmpwindow = window.open("about:blank");
        const clientId = "f6f7f9d1-96ad-4da6-bac2-fa857f04e46d";
        tmpwindow.location.href = "https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=f6f7f9d1-96ad-4da6-bac2-fa857f04e46d&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth=0";
        // 인증센터로 이동
    }
  return (
    <div>
        <HeaderWhite title="사용자 인증"></HeaderWhite>
        <button onClick={handleAuthBtnClick}>사용자 인증 받기</button>
    </div>
    );
};

export default AuthPage;