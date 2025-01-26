package com.capx.repository;

import com.capx.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Find a user by username
    User findByUsername(String username);
    
    // Find a user by email (in case it's needed)
    User findByEmail(String email);
}
