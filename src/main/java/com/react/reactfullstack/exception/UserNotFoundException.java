package com.react.reactfullstack.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not found the user the user with id "+ id);
    }
}
