package com.app.pojos;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="child")
@Data
@AllArgsConstructor
@NoArgsConstructor
@SuppressWarnings("serial")
@Embeddable
public class Child implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cid;
	
	@Column
	private String cname;
	@Column
	private String clname;
	@Column
	private LocalDate dob;
	@Column
	private Status status;
	
	@ManyToOne(optional=false) //many(child) *--->1 (Hospital)  bidirection
	@JoinColumn(name="hid",nullable = false,updatable = false)
	@JsonIgnoreProperties("hChilds")
	@JsonBackReference
	private Hospital hospital;
	
	@ManyToOne(optional=false)//
	@JoinColumn(name="parentid",nullable = false,updatable = false)
	@JsonIgnoreProperties("pChilds")
	@JsonBackReference
	private Parent parent;
	
	public Child(String cname, String clname, LocalDate dob, Hospital hospital,Parent parent) {
		super();
		this.cname = cname;
		this.clname = clname;
		this.dob = dob;
		this.hospital = hospital;
		this.parent=parent;
		//this.parent=parent;
	}
	
//	@OneToOne //child 1-->1 vaccine
//	private Vaccine_Details vaccine;
	
	
	
}
