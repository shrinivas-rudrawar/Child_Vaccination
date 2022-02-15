package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.dao.IChildDao;
import com.app.pojos.Child;

public class ChildService {
	
	@Autowired 
	private IChildDao childDao;
	
	public List<Child> getAllChild_asPer_Parent(int pid){
		return childDao.findChildByParent(pid);
	}

}
