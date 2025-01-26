package com.capx.controller;

import com.capx.model.Stock;
import com.capx.service.StockService;
import com.capx.service.FundsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stocks")
public class StockController {

    @Autowired
    private StockService stockService;

    @Autowired
    private FundsService fundsService;

    @PostMapping("/addToWatchlist")
    public Stock addStockToWatchlist(@RequestBody Stock stock) {
        return stockService.addStock(stock);
    }

    @PostMapping("/buyStock")
    public Stock buyStock(@RequestBody Stock stock, @RequestParam Long userId) {
        if (fundsService.hasSufficientBalance(userId, stock.getBuyPrice() * stock.getQuantity())) {
            return stockService.addStock(stock);
        } else {
            throw new RuntimeException("Insufficient balance");
        }
    }

    @GetMapping("/{userId}/portfolio")
    public List<Stock> getPortfolio(@PathVariable Long userId) {
        return stockService.getStocksByUser(userId);
    }
}
