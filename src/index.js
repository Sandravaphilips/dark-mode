import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import useDarkMode from "./hooks/useDarkMode";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  const [darkMode, setDarkMode] = useDarkMode('value', false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleMode={toggleMode} />
      <Charts coinData={coinData} strokeValue={darkMode ?'#d884c6' : '#8884d8'} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
