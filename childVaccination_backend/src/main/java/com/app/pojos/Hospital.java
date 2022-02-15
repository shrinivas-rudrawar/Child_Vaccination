package com.app.pojos;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="hospital")
@Data
@AllArgsConstructor
@NoArgsConstructor
@SuppressWarnings("serial")
public class Hospital implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int hid;
	@Column(length=45)
	private String hname;
	@Column(length=30)
	private String email;
	@Column
	private long contactNo;
	@Column(length=50)
	private String address;
	@OneToOne
	@JoinColumn(name = "loginid")
	private Login loginId;
	@Column
	private String regNo;
	@CreationTimestamp
	private LocalDate creationDate;
	@Column(name="pincode")
	
	private int pincode;

//	@OneToMany(mappedBy = "hospital" ,fetch=FetchType.EAGER )   //hospital 1-->* Child
//	private List<Child> hChilds=new ArrayList<>();
	
	
	@OneToMany(mappedBy = "hospital"  , fetch=FetchType.EAGER,cascade = CascadeType.ALL)
	@JsonIgnoreProperties("hospital")
	@Fetch(value = FetchMode.SUBSELECT)
	@JsonManagedReference
	private List<Child> hChilds=new ArrayList<>();
	

	
	

	@OneToMany  (fetch=FetchType.EAGER) //hospital 1-->* Child
	@Fetch(value = FetchMode.SUBSELECT)
	@JsonIgnore
	//@LazyCollection(LazyCollectionOption.FALSE)
	private List<Vaccine_Details> vaccines=new ArrayList<>();
	
	
	
	
	//as per gavin king suggestins add helper methods in collections relation
	public void addChild(Child child) {
		hChilds.add(child);
	}
	public void removeChild(Child child) {
		hChilds.remove(child);
	}
	
	public void addVaccine(Vaccine_Details vaccine) {
		vaccines.add(vaccine);
	}
	public void removeVaccine(Vaccine_Details vaccine) {
		vaccines.remove(vaccine);
	}
	public Hospital(String hname, String email, long contactNo, String address, String regNo,Login loginId,int pincode) {
		
		this.hname = hname;
		this.email = email;
		this.contactNo = contactNo;
		this.address = address;
		this.loginId = loginId;
		this.regNo = regNo;
		this.pincode=pincode;
	}
		
}
