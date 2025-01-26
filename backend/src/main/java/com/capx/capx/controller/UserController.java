package com.capx.controller;

import com.capx.model.User;
import com.capx.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signupRequest) {
        // Logic to register user
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        // Logic to authenticate user
        return ResponseEntity.ok("User signed in successfully!");
    }
}












// package com.yourpackage.controller;

// import com.yourpackage.model.User;
// import com.yourpackage.service.UserService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/api/users")
// public class UserController {

//     @Autowired
//     private UserService userService;

//     @PostMapping("/signup")
//     public User registerUser(@RequestBody User user) {
//         return userService.registerUser(user);
//     }

//     @PostMapping("/login")
//     public User loginUser(@RequestBody User user) {
//         User foundUser = userService.findByUsername(user.getUsername());
//         if (foundUser != null && userService.checkPassword(user.getPassword(), foundUser.getPassword())) {
//             return foundUser;
//         } else {
//             throw new RuntimeException("Invalid username or password");
//         }
//     }
// }


// @RestController
// @RequestMapping("/api/auth")
// public class AuthController {

//     @PostMapping("/signup")
//     public ResponseEntity<?> registerUser(@RequestBody SignupRequest signupRequest) {
//         // Logic to register user
//         return ResponseEntity.ok("User registered successfully!");
//     }

//     @PostMapping("/signin")
//     public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
//         // Logic to authenticate user
//         return ResponseEntity.ok("User signed in successfully!");
//     }
// }
