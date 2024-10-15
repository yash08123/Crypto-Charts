import { useState } from "react";
import TradingViewWidget from "./components/TradingView/TradingViewChart";

const App = () => {
  const [selectedSymbol, setSelectedSymbol] = useState("BINANCE:BTCUSDT");
  const [selectedInterval, setSelectedInterval] = useState("1");

  const symbols = ["BINANCE:ETHUSDT", "BINANCE:BNBUSDT", "BINANCE:DOTUSDT"];
  const intervals = ["1", "3", "5"];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-4 bg-gray-800 flex flex-col">
        <h1 className="text-xl font-bold mb-4">Trading Dashboard</h1>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Select Cryptocurrency</h2>
          {symbols.map((symbol, idx) => (
            <button
              key={idx}
              className={`p-2 mb-2 w-full rounded ${
                selectedSymbol === symbol ? "bg-blue-600" : "bg-gray-700"
              }`}
              onClick={() => setSelectedSymbol(symbol)}
            >
              {symbol.split(":")[1]}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Select Time Interval</h2>
          {intervals.map((interval, idx) => (
            <button
              key={idx}
              className={`p-2 mb-2 w-full rounded ${
                selectedInterval === interval ? "bg-blue-600" : "bg-gray-700"
              }`}
              onClick={() => setSelectedInterval(interval)}
            >
              {interval}-Minute
            </button>
          ))}
        </div>

        <div className="mt-auto">
          <h2 className="text-lg font-semibold mb-2">Trading Tools</h2>
          <div className="bg-gray-700 p-4 rounded">
            <p>Technical Indicators Coming Soon...</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4">
        <TradingViewWidget
          symbol={selectedSymbol}
          interval={selectedInterval}
        />
        <div className="bg-gray-800 mt-4 p-4 rounded">
          <h3 className="text-lg font-semibold">Candlestick Details</h3>
          <p>Hover over the candlesticks to view OHLC data.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
