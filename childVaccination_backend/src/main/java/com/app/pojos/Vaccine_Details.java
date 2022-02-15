package com.app.pojos;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="vaccine")
@Data
@AllArgsConstructor
@NoArgsConstructor
@SuppressWarnings("serial")
public class Vaccine_Details implements Serializable{
	@Id
	@GeneratedValue
	private int vid;
	@Column(length=45)
	private String vname;
	@Column(length=200)
	private String description;
	@Column(length=45)
	private String brand;
	@Column(length=45)
	private String type;
	@Column
	private double price;
	

}
