import { useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';

function TradingViewWidget({ symbol = 'BINANCE:BTCUSDT', interval = 'D' }) {
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = ''; 
    }

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "${symbol}",
        "interval": "${interval}",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "details": true,
        "calendar": false
      }`;

    containerRef.current.appendChild(script);
  }, [symbol, interval]); 

  return (
    <div
      className="tradingview-widget-container"
      ref={containerRef}
      style={{ height: '100%', width: '100%' }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: 'calc(100% - 32px)', width: '100%' }}
      ></div>
    </div>
  );
}

// PropTypes validation
TradingViewWidget.propTypes = {
  symbol: PropTypes.string.isRequired,
  interval: PropTypes.string.isRequired 
};

// Provide default values for props if not passed
TradingViewWidget.defaultProps = {
  symbol: 'BINANCE:BTCUSDT',
  interval: 'D',
};

export default memo(TradingViewWidget);
