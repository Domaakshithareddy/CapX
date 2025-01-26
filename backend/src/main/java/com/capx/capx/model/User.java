// package com.capx.model;

// import jakarta.persistence.*;
// import jakarta.validation.constraints.Email;

// @Entity
// @Table(name = "users")
// public class User {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @Column(nullable = false, unique = true)
//     private String username;

//     @Email
//     @Column(nullable = false, unique = true)
//     private String email;

//     @Pattern(regexp = "^\\+?[1-9]\\d{1,14}$", message = "Invalid phone number format")
//     @Column(nullable = false, unique = true)
//     private String phoneNumber;

//     @Column(nullable = false)
//     private String password;

//     // Getters and Setters
// }





const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    number: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = User;