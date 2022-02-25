import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import queryString from "query-string";
import HeaderWhite from "../components/HeaderWhite";
import MainCard from "../components/Main/MainCard";
import BalanceCard from "../components/Balance/BalanceCard";


const BalancePage = () => {
    useEffect(() => {
        getUserBalance();
        getTransactionList();
      }, []);

    const {fintechUseNo} = queryString.parse(useLocation().search);
    console.log(fintechUseNo);

    const [Balance, setBalance] = useState("");
    const [Transaction, setTransaction] = useState([]);

    const getUserBalance = () =>{
        const accessToken = localStorage.getItem("accessToken");

        const genTransId = () => {
            let countnum = Math.floor(Math.random() * 1000000000) + 1;
            let transId = "M202200381U" + countnum; //이용기관번호 본인것 입력
            return transId;
          };

        const sendData = {
            bank_tran_id : genTransId(),
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
            console.log(data);
            setBalance(data);
        });

    };

    // 계좌 내역 조회
    const getTransactionList = () => {
        const accessToken = localStorage.getItem("accessToken");

        const genTransId = () => {
            let countnum = Math.floor(Math.random() * 1000000000) + 1;
            let transId = "M202200381U" + countnum; //이용기관번호 본인것 입력
            return transId;
          };

        const sendData = {
            bank_tran_id:genTransId(),
            fintech_use_num:fintechUseNo,
            inquiry_type:"A",
            inquiry_base:"D",
            from_date:20220101,
            to_date:20220225,
            sort_order:"D",
            tran_dtime:20220225130122,
        };
        console.log(sendData)

        const option = {
            method: "GET",
            url: "/v2.0/account/transaction_list/fin_num",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: sendData, //object
        };

        axios(option).then(({ data }) => {
            console.log(data);
            setTransaction(data.res_list);
        });
    };

    return (
        <div>
            <HeaderWhite title="잔액 조회"></HeaderWhite>
            <BalanceCard
                bankName={Balance.bank_name}
                fintechNo={Balance.fintech_use_num}
                balance={Balance.balance_amt}
            ></BalanceCard>
            {Transaction.map((transaction)=>{
                return (
                    <p>
                        {transaction.print_content}/{transaction.tran_amt}
                    </p>
                )
            })}
        </div>
    )
}

export default BalancePage;