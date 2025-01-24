import './Dashboard.css';
import { useState, useEffect } from "react";
import { fetchStockPrice } from '../../api/api'; // Assuming api/api.js contains the fetchStockPrice function

const Dashboard = () => {
    const [liveStocks, setLiveStocks] = useState([]); 
    const [addedStocks, setAddedStocks] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [portfolioLoading, setPortfolioLoading] = useState(true);

    const stockSymbols = ["AAPL"]; 
    // const stockSymbols = ["AAPL","NKE","DIS","SBUX","BA"]; 

    useEffect(() => {
        const fetchAllStocks = async () => {
            try {
                const stockData = await Promise.all(
                    stockSymbols.map(async (symbol) => {
                        try {
                            const price = await fetchStockPrice(symbol);
                            return { name: symbol.split(".")[0], symbol, price };
                        } catch (error) {
                            console.error(`Error fetching data for ${symbol}:`, error);
                            return { name: symbol.split(".")[0], symbol, price: "Error" }; 
                        }
                    })
                );
                setLiveStocks(stockData);
            } catch (error) {
                console.error("Error fetching stock data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllStocks();
    }, []);

    useEffect(() => {
        const fetchPortfolioPrices = async () => {
            try {
                const exampleAddedStocks = [
                    { name: "aapl", symbol: "AAPL", quantity: 2, buyPrice: 200 },
                    { name: "nke", symbol: "NKE", quantity: 1, buyPrice: 75 },
                ];

                const updatedStocks = await Promise.all(
                    exampleAddedStocks.map(async (stock) => {
                        try {
                            const price = await fetchStockPrice(stock.symbol); 
                            return {
                                ...stock,
                                currentPrice: price, 
                            };
                        } catch (error) {
                            console.error(`Error fetching current price for ${stock.symbol}:`, error);
                            return { ...stock, currentPrice: "Error" };
                        }
                    })
                );

                setAddedStocks(updatedStocks);
            } catch (error) {
                console.error("Error fetching portfolio data:", error);
            } finally {
                setPortfolioLoading(false);
            }
        };

        fetchPortfolioPrices();
    }, []);

    const totalInvestment = addedStocks.reduce((sum, stock) => sum + stock.quantity * stock.buyPrice, 0);
    const currentPortfolioValue = addedStocks.reduce(
        (sum, stock) => sum + (stock.currentPrice !== "Error" ? stock.quantity * stock.currentPrice : 0),
        0
    );
    const profitLossPercentage = totalInvestment 
        ? (((currentPortfolioValue - totalInvestment) / totalInvestment) * 100).toFixed(2) 
        : "0";

    return (
        <>
            <div className='boxd'>
                <div className='dashboard'>
                    <h2>Watchlist</h2>
                    {loading ? (
                        <p>Loading stock data...</p>
                    ) : (
                        <table border="1" cellPadding="10" style={{ width: "100%" }}>
                            <thead>
                                <tr>
                                    <th>Stock Name</th>
                                    <th>Symbol</th>
                                    <th>Current Price (₹)</th>
                                    <th>Buy or Sell</th>
                                </tr>
                            </thead>
                            <tbody>
                                {liveStocks.map((stock, index) => (
                                    <tr key={index}>
                                        <td>{stock.name}</td>
                                        <td>{stock.symbol}</td>
                                        <td>
                                            {stock.price === "Error" 
                                                ? "Error fetching price" 
                                                : `₹${stock.price}`}
                                        </td>
                                        <td style={{ gap: "50px" }}>
                                            <button style={{ width: "75px", background: '#4CAF50', marginRight: '10px' }}>Buy</button>
                                            <button style={{ width: "75px", background: '#f44336' }}>Sell</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            <div className='boxd'>
                <div className='dashboard'>
                    <h2>Portfolio Summary</h2>
                    {portfolioLoading ? (
                        <p>Loading portfolio data...</p>
                    ) : (
                        <>
                            <div className='pandl'>
                                <p>Profit and Loss: {profitLossPercentage}%</p>
                                <p>Total Investment: ₹{totalInvestment}</p>
                                <p>Current Value: ₹{currentPortfolioValue}</p>
                            </div>
                            <table border="1" cellPadding="10" style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>Stock Name</th>
                                        <th>Symbol</th>
                                        <th>Quantity</th>
                                        <th>Buy Price (₹)</th>
                                        <th>Current Price (₹)</th>
                                        <th>Total Value (₹)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {addedStocks.map((stock, index) => (
                                        <tr key={index}>
                                            <td>{stock.name}</td>
                                            <td>{stock.symbol}</td>
                                            <td>{stock.quantity}</td>
                                            <td>₹{stock.buyPrice}</td>
                                            <td>
                                                {stock.currentPrice === "Error" 
                                                    ? "Error fetching price" 
                                                    : `₹${stock.currentPrice}`}
                                            </td>
                                            <td>
                                                {stock.currentPrice === "Error"
                                                    ? "Error"
                                                    : `₹${(stock.quantity * stock.currentPrice).toFixed(2)}`}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Dashboard;






// Get price continuously



// import './Dashboard.css';
// import { useState, useEffect } from "react";
// import { fetchStockPrice } from '../../api/api'; // Assuming api/api.js contains the fetchStockPrice function

// const Dashboard = () => {
//     const [liveStocks, setLiveStocks] = useState([]); 
//     const [addedStocks, setAddedStocks] = useState([]); 
//     const [loading, setLoading] = useState(true);

//     const stockSymbols = ["aapl", "TCS.NS", "INFY.NS", "HDFCBANK.NS", "ITC.NS"]; 

//     const fetchAllStocks = async () => {
//         try {
//             const stockData = await Promise.all(
//                 stockSymbols.map(async (symbol) => {
//                     try {
//                         const price = await fetchStockPrice(symbol);
//                         return { name: symbol.split(".")[0], symbol, price };
//                     } catch (error) {
//                         console.error(`Error fetching data for ${symbol}:`, error);
//                         return { name: symbol.split(".")[0], symbol, price: "Error" }; 
//                     }
//                 })
//             );
//             setLiveStocks(stockData);
//         } catch (error) {
//             console.error("Error fetching stock data:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         // Initial fetch when the component mounts
//         fetchAllStocks();

//         // Set up an interval to fetch data every 10 seconds
//         const intervalId = setInterval(fetchAllStocks, 10000);

//         // Cleanup function to clear the interval when the component unmounts
//         return () => clearInterval(intervalId);
//     }, []);

//     useEffect(() => {
//         const exampleAddedStocks = [
//             { name: "RELIANCE", symbol: "RELIANCE.NS", quantity: 2, buyPrice: 2500, currentPrice: 2736.15 },
//             { name: "TCS", symbol: "TCS.NS", quantity: 1, buyPrice: 3000, currentPrice: 3350.5 },
//         ];
//         setAddedStocks(exampleAddedStocks);
//     }, []);

//     const totalInvestment = addedStocks.reduce((sum, stock) => sum + stock.quantity * stock.buyPrice, 0);
//     const currentPortfolioValue = addedStocks.reduce((sum, stock) => sum + stock.quantity * stock.currentPrice, 0);
//     const profitLossPercentage = totalInvestment 
//         ? (((currentPortfolioValue - totalInvestment) / totalInvestment) * 100).toFixed(2) 
//         : "0";

//     return (
//         <>
//             <div className='boxd'>
//                 <div className='dashboard'>
//                     <h2>Watchlist</h2>
//                     {loading ? (
//                         <p>Loading stock data...</p>
//                     ) : (
//                         <table border="1" cellPadding="10" style={{ width: "100%" }}>
//                             <thead>
//                                 <tr>
//                                     <th>Stock Name</th>
//                                     <th>Symbol</th>
//                                     <th>Current Price (₹)</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {liveStocks.map((stock, index) => (
//                                     <tr key={index}>
//                                         <td>{stock.name}</td>
//                                         <td>{stock.symbol}</td>
//                                         <td>
//                                             {stock.price === "Error" 
//                                                 ? "Error fetching price" 
//                                                 : `₹${stock.price}`}
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     )}
//                 </div>
//             </div>

//             <div className='boxd'>
//                 <div className='dashboard'>
//                     <h2>Portfolio Summary</h2>
//                     <div className='pandl'>
//                         <p>Profit and Loss: {profitLossPercentage}%</p>
//                         <p>Total Investment: ₹{totalInvestment}</p>
//                         <p>Current Value: ₹{currentPortfolioValue}</p>
//                     </div>
//                     <table border="1" cellPadding="10" style={{ width: "100%" }}>
//                         <thead>
//                             <tr>
//                                 <th>Stock Name</th>
//                                 <th>Symbol</th>
//                                 <th>Quantity</th>
//                                 <th>Buy Price (₹)</th>
//                                 <th>Current Price (₹)</th>
//                                 <th>Total Value (₹)</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {addedStocks.map((stock, index) => (
//                                 <tr key={index}>
//                                     <td>{stock.name}</td>
//                                     <td>{stock.symbol}</td>
//                                     <td>{stock.quantity}</td>
//                                     <td>₹{stock.buyPrice}</td>
//                                     <td>₹{stock.currentPrice}</td>
//                                     <td>₹{(stock.quantity * stock.currentPrice).toFixed(2)}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Dashboard;
