package com.react.reactfullstack.repository;

import com.react.reactfullstack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User,Long>{
}
