import axios from "axios";
export const fetchStockPrice = async (symbol) => {
    const API_KEY='a58636f2086f4335a512c9d410e77f58';
    const BASE_URL='https://api.twelvedata.com/price';
    try {
        const response = await axios.get(`${BASE_URL}?symbol=${symbol}&apikey=${API_KEY}`);
        if (response.data && response.data.price) {
            return response.data.price;
        } else {
            throw new Error(`Invalid response: ${JSON.stringify(response.data)}`);
        }
    } catch (error) {
        console.error('Error fetching stock price:', error.message || error.response?.data);
        throw error; 
    }
};


// const API_KEY = '02322a0f92ea4aa6a282dcb6c1ae1fce';
// const BASE_URL = 'https://api.twelvedata.com/price';

// export const fetchStockPrice = async (symbol) => {
//     try {
//         const response = await axios.get(`${BASE_URL}?symbol=${symbol}&apikey=${API_KEY}`);
//         if (response.data && response.data.price) {
//             return response.data.price;
//         } else {
//             throw new Error(`Invalid response: ${JSON.stringify(response.data)}`);
//         }
//     } catch (error) {
//         console.error('Error fetching stock price:', error.message || error.response?.data);
//         throw error; 
//     }
// };








