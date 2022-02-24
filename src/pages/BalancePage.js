import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import queryString from "query-string";
import HeaderWhite from "../components/HeaderWhite";
import MainCard from "../components/Main/MainCard";

const BalancePage = () => {
    useEffect(() => {
        getUserBalance();
      }, []);

    const {fintechUseNo} = queryString.parse(useLocation().search);
    console.log(fintechUseNo);

    const [Balance, setBalance] = useState("");

    const getUserBalance = () =>{
        const accessToken = localStorage.getItem("accessToken");

        const sendData = {
            bank_tran_id : "M202200381U000000006",
            fintech_use_num: fintechUseNo,
            tran_dtime : "20220224130122",
        };
        console.log(sendData)

        const option = {
            method: "GET",
            url: "/v2.0/account/balance/fin_num",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: sendData, //object
        };

        axios(option).then(({ data }) => {
            console.log(data)
            const BalanceFromRequest = data.balance_amt;
            setBalance(BalanceFromRequest);
        });

    };

    return (
        <div>
            <HeaderWhite title="잔액 조회"></HeaderWhite>
            <p>잔액 {Balance}원</p>
        </div>
    )
}

export default BalancePage;