import React, { createContext, useState } from 'react';

const StockContext = createContext();

function StockProvider({ children }) {
  const [stocks, setStocks] = useState([]);

  return (
    <StockContext.Provider value={{ stocks, setStocks }}>
      {children}
    </StockContext.Provider>
  );
}

export default StockContext;
