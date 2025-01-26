const { User, Funds, Stock, Transaction, Watchlist } = require('../models'); 

// User Service
const createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    await Funds.create({ userId: newUser.id }); // Create funds for the new user
    return newUser;
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
};

const getUserByUsername = async (username) => {
  try {
    return await User.findOne({ where: { username } });
  } catch (error) {
    throw new Error('Error fetching user: ' + error.message);
  }
};

// Funds Service
const depositFunds = async (userId, amount) => {
  try {
    const funds = await Funds.findOne({ where: { userId } });
    funds.balance += amount;
    await funds.save();
    return funds;
  } catch (error) {
    throw new Error('Error depositing funds: ' + error.message);
  }
};

const withdrawFunds = async (userId, amount) => {
  try {
    const funds = await Funds.findOne({ where: { userId } });
    if (funds.balance < amount) {
      throw new Error('Insufficient balance');
    }
    funds.balance -= amount;
    await funds.save();
    return funds;
  } catch (error) {
    throw new Error('Error withdrawing funds: ' + error.message);
  }
};

// Stock Service
const addStockToWatchlist = async (stockId, userId) => {
  try {
    return await Watchlist.create({ stockId, userId });
  } catch (error) {
    throw new Error('Error adding stock to watchlist: ' + error.message);
  }
};

const buyStock = async (stockId, userId, quantity, price) => {
  try {
    // 1. Check user balance
    const funds = await Funds.findOne({ where: { userId } });
    const totalCost = quantity * price;
    if (funds.balance < totalCost) {
      throw new Error('Insufficient balance');
    }

    // 2. Deduct funds
    funds.balance -= totalCost;
    await funds.save();

    // 3. Create a stock entry
    const stock = await Stock.create({ stockId, userId, quantity, buyPrice: price }); 

    // 4. Create a transaction record
    await Transaction.create({ 
      stockId, 
      userId, 
      transactionType: 'BUY', 
      quantity, 
      price, 
    });

    return stock;
  } catch (error) {
    throw new Error('Error buying stock: ' + error.message);
  }
};

// ... other service functions (getStocksByUser, etc.)

module.exports = { 
  createUser, 
  getUserByUsername, 
  depositFunds, 
  withdrawFunds, 
  addStockToWatchlist, 
  buyStock, 
  // ... other exported functions
};