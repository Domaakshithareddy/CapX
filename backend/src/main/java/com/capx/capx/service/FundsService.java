package com.capx.service;

import com.capx.model.Funds;
import com.capx.repository.FundsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FundsService {
    @Autowired
    private FundsRepository fundsRepository;

    // Deposit funds for a user
    public Funds deposit(Long userId, Double amount) {
        Funds funds = fundsRepository.findByUserId(userId);
        funds.setBalance(funds.getBalance() + amount);
        return fundsRepository.save(funds);
    }

    // Withdraw funds for a user
    public Funds withdraw(Long userId, Double amount) throws Exception {
        Funds funds = fundsRepository.findByUserId(userId);
        if (funds.getBalance() < amount) {
            throw new Exception("Insufficient Balance");
        }
        funds.setBalance(funds.getBalance() - amount);
        return fundsRepository.save(funds);
    }

    // Get the current funds balance for a user
    public Funds getFunds(Long userId) {
        return fundsRepository.findByUserId(userId);
    }
}
