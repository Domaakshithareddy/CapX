package com.capx.repository;

import com.capx.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StockRepository extends JpaRepository<Stock, Long> {
    // Find stocks by userId
    List<Stock> findByUserId(Long userId);

    // Find stock by its ticker
    Stock findByTicker(String ticker);
}
