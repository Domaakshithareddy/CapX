package com.capx.service;

import com.capx.model.User;
import com.capx.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Register a new user
    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // Find a user by their username
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    // Find a user by their email (optional if needed in the future)
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
