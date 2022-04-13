package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.HospitalDao;
import com.app.dao.IAdminDao;
import com.app.dao.IChildDao;
import com.app.dao.ILoginDao;
import com.app.dao.IParentDao;
import com.app.pojos.Login;

@Service
@Transactional
public class LogInService {

	@Autowired
	private ILoginDao loginDao;
	@Autowired
	private IParentDao parentDao;
	@Autowired
	private HospitalDao hospitalDao;
	@Autowired
	private IAdminDao adminDao;
	@Autowired
	private IChildDao childDao;

	public Object ValidateUser(String username, String passwiord) {
		// Login login = loginDao.findByUsernameAndPassword(username, passwiord);
		Login login1 = loginDao.findByUsername(username);
		PasswordEncoder passencoder = new BCryptPasswordEncoder();
		String encodedPassword = login1.getPassword();
		boolean flag = passencoder.matches(passwiord, encodedPassword);
		if (flag) {
			if (login1.getRole().getRoleId() == 101) {
				// Parent p= parentDao.findParent(login.getLoginId());
				int pid = parentDao.findParentId(login1.getLoginId());
				return parentDao.findParent1(pid);

//			Parent p=parentDao.findParent(login.getLoginId());
//			List<Child> childs=childDao.findChildByParent(p.getPid());
//			return new ResponseParentLogin(p,childs);
			} else if (login1.getRole().getRoleId() == 102) {
				return hospitalDao.findHospital(login1.getLoginId());
			} else if (login1.getRole().getRoleId() == 103) {
				// System.out.println(adminDao.findByAdminName("admin"));
				return adminDao.findByAdminName("admin");
			}
		}

		throw new ResourceNotFoundException("Invalid credential");

	}
//	public boolean userPasswordCheck(String password, User user) {
//
//	    PasswordEncoder passencoder = new BCryptPasswordEncoder();
//	    String encodedPassword = user.getPassword();
//	    return passencoder.matches(password, encodedPassword);
//	}

}
