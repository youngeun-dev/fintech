import React, { useState } from 'react';
import HeaderWhite from '../components/HeaderWhite';
import { useLocation } from 'react-router-dom';
import queryString from "query-string";
import axios from 'axios';

const AuthResult = () => {
    console.log(useLocation().search);
    const parsedResult = queryString.parse(useLocation().search);
    const [accessToken, setaccessToken] = useState("토큰을 받기 전 입니다.");
    const [userSeqNo, setuserSeqNo] = useState("사용자 번호");
    console.log(parsedResult.code);

    const getAccessToken = () =>{
        const sendData = {
            code : "",
            client_id : "",
            client_secret : "",
            redirect_url : "",
            grant_type : "",
        }
        const option = {
            method : "",
            url : "",
            headers : {},
            data : sendData,
        };
        axios(option).then((reponse)=>{

        });
    };

  return (
    <div>
        <HeaderWhite title={"AccessToken 요청"}></HeaderWhite>
        <p>인증코드 : {parsedResult.code}</p>
        <p>AccessToken : {accessToken}</p>
        <p>사용자 번호 : {userSeqNo}</p>
    </div>
    
  );
};

export default AuthResult;