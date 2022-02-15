package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.RegisterHospital;
import com.app.dto.UpdateInformation;
import com.app.pojos.Hospital;
import com.app.service.HospitalService;

@RestController
@RequestMapping
public class HospitalController {
	
	@Autowired
	private HospitalService hospitalService;
	
	@PostMapping("/hospitalregister")
	public Hospital registerHospital(@RequestBody RegisterHospital hospital) {
		 return  hospitalService.registerHospital(hospital);
	}
	
	@PostMapping("/updatehospital/{hid}")
	public String updateParent(@RequestBody UpdateInformation hospital,@PathVariable("hid") int hid) {
		return hospitalService.updateHospitalDetails(hospital,hid);
	}

}
