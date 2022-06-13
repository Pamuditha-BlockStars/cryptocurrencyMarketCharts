import React, {Component, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import './MainPage.css';
import axios from "axios";
import { Helmet } from "react-helmet";

const MainPage = (props) => {

    useEffect(()=>{
        axios.get('http://localhost:3001/get').then(res => {
           // await console.log(res);
        }).catch((err)=>{
            console.log(err);
        });
    },[]);

    const navigate = useNavigate();

    const BTCclick = () => navigate.push('/btc');

        return(
            <div>
                <h2 className='title'> Cryptocurrency Market Range </h2>
            <div className='maindiv'>
                <div className='row'>
                <div className='col'>
                    <button type="button" onClick={() => navigate("/btc")} className="btn btn-outline-dark mianbut">BTC Price Range</button>
                </div>
                <div className='col'>
                    <button type="button" onClick={() => navigate("/bnb")} className="btn btn-outline-dark mianbut">BNB Price Range</button>
                </div>
                <div className='col'>
                    <button type="button" onClick={() => navigate("/eth")} className="btn btn-outline-dark mianbut">ETH Price Range  </button>
                </div>
                </div>
            </div>
            </div>
        );
}

export default MainPage;
