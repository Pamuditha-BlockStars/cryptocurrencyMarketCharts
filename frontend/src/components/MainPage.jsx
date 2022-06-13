import React, {Component, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import './MainPage.css';
import axios from "axios";

const MainPage = (props) => {

    // call binance API
    useEffect(()=>{
        axios.get('http://localhost:3001/get').then(res => {
        }).catch((err)=>{
            console.log(err);
        });
    },[]);

    const navigate = useNavigate();

        return(
            <div>
                <h2 className='title'> Cryptocurrency Market Range </h2>
            <div className='maindiv'>
                <div className='row'>
                <div className='col'>
                    <button type="button" onClick={() => navigate("/btc")} className="btn btn-outline-dark">BTC Price Range</button>
                </div>
                <div className='col'>
                    <button type="button" onClick={() => navigate("/bnb")} className="btn btn-outline-dark">BNB Price Range</button>
                </div>
                <div className='col'>
                    <button type="button" onClick={() => navigate("/eth")} className="btn btn-outline-dark">ETH Price Range  </button>
                </div>
                </div>
            </div>
            </div>
        );
}

export default MainPage;
