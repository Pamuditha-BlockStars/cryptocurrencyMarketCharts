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
                <div>
                    <Helmet>
                        <style>{"body {  background-image: url(\"https://helios-i.mashable.com/imagery/articles/04ldy4kWWpLv9ccOUPseqIo/hero-image.fill.size_1248x702.v1647386540.jpg\"); background-repeat: no-repeat; background-size: 100% 120%; }"}</style>
                    </Helmet>
                </div>
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
