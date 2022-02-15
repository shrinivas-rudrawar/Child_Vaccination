package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.HospitalDao;
import com.app.dao.ILoginDao;
import com.app.dao.IRoleDao;
import com.app.dto.HospitalHistory;
import com.app.dto.RegisterHospital;
import com.app.dto.UpdateInformation;
import com.app.pojos.Hospital;
import com.app.pojos.Login;
import com.app.pojos.Role;

@Service
@Transactional
public class HospitalService {
	
	@Autowired
	private HospitalDao hospitalDao;
	@Autowired
	private IRoleDao roleDao;
	@Autowired
	private ILoginDao loginDao;
	
	public Hospital registerHospital(RegisterHospital hospital) {
		Role role=roleDao.findById(102).orElseThrow(()->new ResourceNotFoundException("Role not found !!!"));
		
		Login hlogin= loginDao.save(new Login(hospital.getUsername(),hospital.getPassword(),role));
		//System.out.println(hospital);
		return hospitalDao.save(new Hospital(hospital.getHname(),hospital.getEmail(),hospital.getContactNo(),hospital.getAddress(),hospital.getRegNo(),hlogin,hospital.getPincode()));
	}
	
	public List<Hospital> getAllHospital(){
		return hospitalDao.findAll();
	}

	public String updateHospitalDetails(UpdateInformation hospital, int hid) {
		
		hospitalDao.updateHospital(hospital.getEmail(),hospital.getAddress(),hospital.getMobile(),hid);
		return "Updated successFully";
	}
	
	//****************************pending***********************
	public List<HospitalHistory> getHospitalHistory() {
		// TODO Auto-generated method stub
		return null;
	}

}
