package com.capx.repository;

import com.capx.model.Funds;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FundsRepository extends JpaRepository<Funds, Long> {
    // Find funds by userId
    Funds findByUserId(Long userId);
}
