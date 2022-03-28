package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.RegisterHospital;
import com.app.dto.UpdateInformation;
import com.app.pojos.Child;
import com.app.pojos.Hospital;
import com.app.service.ChildService;
import com.app.service.HospitalService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/hospital")
public class HospitalController {
	
	@Autowired
	private HospitalService hospitalService;
	@Autowired
	private ChildService childService;
	
	@PostMapping("/hospitalregister")
	public Hospital registerHospital(@RequestBody RegisterHospital hospital) {
		 return  hospitalService.registerHospital(hospital);
	}
	
	@PatchMapping("/updatehospital/{hid}")
	public String updateParent(@RequestBody UpdateInformation hospital,@PathVariable("hid") int hid) {
		return hospitalService.updateHospitalDetails(hospital,hid);
	}
	
	@PatchMapping("/changeStatus/{cid}")
	public void updateStatustoVaccinated(@PathVariable int cid) {
		childService.updateStatus(cid);
	}
	
	
	@GetMapping("/getallchilds/{hid}")
	public List<Child> getAllChilds(@PathVariable("hid") int hid){
		return hospitalService.getAllChild(hid);		
	}

}
