package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="login")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Login {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int loginId;
	@Column(length=40)
	private String username;
	@Column(length=20)
	private String password;
	
	
	@OneToOne
	@JoinColumn(name="roleId",nullable=false)
	//@MapsId  //mapping for an EmbeddedId primary key
	private Role role;


	public Login(String username, String password, Role role) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
	}
	
	

}
