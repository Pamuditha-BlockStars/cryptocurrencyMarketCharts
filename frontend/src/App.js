import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import BtcChart from "./components/btc/btcChart";
import BnbChart from './components/bnb/bnbChart';
import EthChart from "./components/eth/ethChart"
import Background from "./components/MainPage";

function App() {
  return (
    <Routes>
      <Route path={'/'} element ={<><MainPage/></>} />
      <Route path={'/btc'} element ={<><MainPage/><BtcChart/></>} />
      <Route path={'/bnb'} element ={<><MainPage/><BnbChart/></>} />
      <Route path={'/eth'} element ={<><MainPage/><EthChart/></>} />
    </Routes>
  );
}

export default App;
