import React, { useContext } from 'react';
import StockContext from './StockContext';

function StockItem({ stock }) {
  const { fetchStockData } = useContext(StockContext);

 
  useEffect(() => {
    const fetchPrice = async () => {
      const currentPrice = await fetchStockData(stock.symbol);
      
    };
    fetchPrice();
  }, [fetchStockData, stock.symbol]);

  return (
    <li>
      
    </li>
  );
}

export default StockItem;
