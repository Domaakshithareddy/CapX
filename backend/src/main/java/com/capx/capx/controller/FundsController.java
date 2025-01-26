package com.capx.controller;

import com.capx.service.FundsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/funds")
public class FundsController {

    @Autowired
    private FundsService fundsService;

    @PostMapping("/deposit")
    public void depositFunds(@RequestParam Long userId, @RequestParam Double amount) {
        fundsService.depositFunds(userId, amount);
    }

    @PostMapping("/withdraw")
    public void withdrawFunds(@RequestParam Long userId, @RequestParam Double amount) {
        fundsService.withdrawFunds(userId, amount);
    }
}
