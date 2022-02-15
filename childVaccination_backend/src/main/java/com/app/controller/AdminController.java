package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.HospitalHistory;
import com.app.dto.ParentHistory;
import com.app.pojos.Hospital;
import com.app.pojos.Parent;
import com.app.service.HospitalService;
import com.app.service.ParentService;

@RestController
@RequestMapping
public class AdminController {
	@Autowired
	private ParentService parentService;
	
	@Autowired
	private HospitalService hospitalService;
	
	@GetMapping("/getallparent")
	public List<Parent> getAllParent(){
		return parentService.getAllParent();
	}
	
	@GetMapping("/getallhospital")
	public List<Hospital> getAllHospital(){
		return hospitalService.getAllHospital();
	}
	
	//*****************************pending**************************
	@GetMapping("/getparenthistory")
	public List<ParentHistory>getParentHistory(){
		return parentService.getParentHistory();
	}
	//*****************************pending**************************
	@GetMapping("/gethospitalhistory")
	public List<HospitalHistory>getHospitalHistory(){
		return hospitalService.getHospitalHistory();
	}

}
