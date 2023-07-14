package com.spring.persondetails;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

//import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class PersonController {

	@Autowired
	private PersonService personService;

	@GetMapping("/")
	public String welcome() {
		return "Welcome to Spring Application...";
	}

	@PostMapping("/save")
	public Person save(@RequestBody @Valid Person person) {
//		if(result.hasErrors()) {
//		return personService.saveData(person);
//		}
		return personService.saveData(person);
	}

	@GetMapping("/getall")
	public List<Person> getDetails() {

		return personService.getDetails();
	}

	@GetMapping("/getId/{id}")
	public Optional<Person> getById(@PathVariable Integer id) {
		return personService.getById(id);

	}

	@DeleteMapping("/delete/{id}")
	public String deletePerson(@PathVariable Integer id) {
	     
		personService.deleteById(id);
		return "data deleted successfully.."+id;
		
	}

	@PutMapping("/update/{id}")
	public Person updateById(@PathVariable Integer id, @RequestBody Person person) {
		return personService.updateUserById(id, person);
	}

}
