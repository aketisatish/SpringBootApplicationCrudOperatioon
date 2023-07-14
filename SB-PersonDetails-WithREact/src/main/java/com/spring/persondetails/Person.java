package com.spring.persondetails;

import javax.persistence.Column;
//import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data

public class Person {
	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	
	private Integer id;
	//@Column(name = "personname")
	@NotEmpty(message = "must not be null")
	@Size(min = 3,max = 12, message = "name must be 3 to 12 characters")
	private String pname;
	
	private String email;
	private String password;
	
	//@Column(name = "mobilenumber")
	
	@NotEmpty(message = "phone Number required")
	@Size(min=10,message = "phone number have atleast 10 digits")
	private String mobileno;
}
