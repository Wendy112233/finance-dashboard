import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import StockForm from './StockForm'
import StockList from './StockList';
import StockContext from './StockContext';

function App() {
  const [stocks, setStocks] = useState([]);

  const fetchStockData = useCallback(async (symbol) => {
    
    const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=E23I7JYG39IEID68`);
    return response.data['Global Quote']['05. price'];
  }, []);

  useEffect(() => {
    
    const fetchData = async () => {
      
      const initialStocks = [
        
      ];
      setStocks(initialStocks);
    };
    fetchData();
  }, [fetchStockData]);

  return (
    <StockContext.Provider value={{ stocks, setStocks, fetchStockData }}>
      <div>
        <StockForm />
        <StockList />
      </div>
    </StockContext.Provider>
  );
}

export default App;