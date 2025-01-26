package com.capx.service;

import com.capx.model.Stock;
import com.capx.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {
    @Autowired
    private StockRepository stockRepository;

    // Add a new stock to the portfolio/watchlist
    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    // Get all stocks for a specific user by user ID
    public List<Stock> getStocksByUser(Long userId) {
        return stockRepository.findByUserId(userId);
    }

    // Delete a stock by its ID
    public void deleteStock(Long stockId) {
        stockRepository.deleteById(stockId);
    }

    // Find a stock by its ticker symbol
    public Stock getStockByTicker(String ticker) {
        return stockRepository.findByTicker(ticker);
    }
}
