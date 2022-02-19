package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.ILoginDao;
import com.app.pojos.Login;


@Service
@Transactional
public class CustomerUserDetailService implements UserDetailsService{

	@Autowired
	private ILoginDao loginDao;
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Login login=loginDao.findByUsername(username).orElseThrow(() -> new ResourceNotFoundException("User Name not found !"));
		
		return null;
	}

}
