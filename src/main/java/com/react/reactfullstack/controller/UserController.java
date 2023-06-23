package com.react.reactfullstack.controller;

import com.react.reactfullstack.exception.UserNotFoundException;
import com.react.reactfullstack.model.User;
import com.react.reactfullstack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setDescription(newUser.getDescription());
                    user.setAssignedto(newUser.getAssignedto());
                    user.setDuedate(newUser.getDuedate());
                    user.setCreatedat(newUser.getCreatedat());
                    user.setCompletedat(newUser.getCompletedat());
                    user.setUpdatedat(newUser.getUpdatedat());
                    return userRepository.save(user);

                }).orElseThrow(()->new UserNotFoundException(id));
    }

            @DeleteMapping("/user/{id}")
            String deleteUser(@PathVariable Long id){
               if(!userRepository.existsById(id)){
                   throw new UserNotFoundException(id);
               }
               userRepository.deleteById(id);
               return "User with id "+id+" has been deleted successfully";
    }



}
