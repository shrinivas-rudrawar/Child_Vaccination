package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Login;

@Repository
public interface ILoginDao extends JpaRepository<Login, Integer>{
	Login findByUsernameAndPassword(String username,String passwiord);
	
	Optional<Login> findByUsername(String username) ;
}
