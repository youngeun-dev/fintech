import React, { useState, useEffect } from 'react';
import HeaderWhite from '../components/HeaderWhite';

const MainPage = () => {
    useEffect(() => {
      getAccountList();
    }, [])
    
    const [accountList, setaccountList] = useState()

    const getAccountList = () => {
        const accessToken = localStorage.getItem("accessToken");
        const userSeqNo = localStorage.getItem("userSeqNo");

        // 사용자 정보 조회 API를 통해 accountList 에 게좌 목록을 저장 axios ; 메뉴얼 참고
    };

  return (
    <div>
        <Headers title={"메인페이지"}></Headers>
    </div>
  )
}

export default MainPage