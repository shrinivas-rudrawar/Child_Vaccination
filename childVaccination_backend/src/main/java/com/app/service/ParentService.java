package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.HospitalDao;
import com.app.dao.IChildDao;
import com.app.dao.ILoginDao;
import com.app.dao.IParentDao;
import com.app.dao.IRoleDao;
import com.app.dao.IVaccineDao;
import com.app.dto.UpdateInformation;
import com.app.dto.ParentHistory;
import com.app.dto.RegisterChild;
import com.app.dto.RegisterParent;
import com.app.pojos.Child;
import com.app.pojos.Hospital;
import com.app.pojos.Login;
import com.app.pojos.Parent;
import com.app.pojos.Role;
import com.app.pojos.Vaccine_Details;

@Service
@Transactional
public class ParentService {
	
	@Autowired
	private IParentDao parentDao;
	
	@Autowired
	private ILoginDao loginDao;
	@Autowired
	private IRoleDao roleDao;
	@Autowired
	private IVaccineDao vaccineDao;
	
	@Autowired
	private HospitalDao hospitalDao;
	@Autowired
	private IChildDao childDao;
	
	
	public Parent registerParent(RegisterParent regP) {
		//System.out.println(regP);
		Role role = roleDao.findById(101).orElseThrow(()->new ResourceNotFoundException("Role not found !!!"));/*roleService.getSpecificRole(101);*/
				
		//System.out.println(role);
		Login plogin=loginDao.save(new Login(regP.getUsername(),regP.getPassword(),role));
		return parentDao.save(new Parent(regP.getFname(),regP.getLname(),regP.getEmail(),regP.getContactNo(),regP.getAddress(),regP.getAdharNo(),plogin));
	}
	
	public List<Vaccine_Details> getAllVaccines(){
		return vaccineDao.findAll();
	}

	public void addChildDetails( RegisterChild child,int pid) {
		Parent p=parentDao.findById(pid).orElseThrow(()->new ResourceNotFoundException("parent not found"));
		Hospital hospital=hospitalDao.findById(child.getHid()).orElseThrow(()->new ResourceNotFoundException("Hospital not found"));
		System.out.println(hospital);
		Child child1=childDao.save(new Child(child.getFname(),child.getLname(),child.getDob(),hospital,p));
		p.addChild(child1);
		parentDao.save(p);
	}

	public String updateParentDetails(UpdateInformation p, int pid) {
		//Parent p1=parentDao.findById(pid).orElseThrow(()->new ResourceNotFoundException("parent not found"));
		//parentDao.save(p);
		parentDao.updateParent(p.getEmail(), p.getAddress(), p.getMobile(), pid);
		return "Updated successFully";
	}

	public List<Parent> getAllParent() {
		// TODO Auto-generated method stub
		return parentDao.findAll();
		
	}
	//************************************pending**************************
	public List<ParentHistory> getParentHistory() {
		// TODO Auto-generated method stub
		return null;
	}

	
}
