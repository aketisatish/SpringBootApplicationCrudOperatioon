package com.spring.persondetails;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

	@Autowired
	private PersonRepository personRepository;

	public Person saveData(Person person) {

		return personRepository.save(person);
	}

	public List<Person> getDetails() {

		return personRepository.findAll();
	}

	public Optional<Person> getById(Integer id) {

		return personRepository.findById(id);
	}

	public Person updateUserById(Integer id, Person person) {
		Person existPerson = personRepository.findById(id).get();
		existPerson.setId(person.getId());
		existPerson.setPname(person.getPname());
		existPerson.setEmail(person.getEmail());
		existPerson.setPassword(person.getPassword());
		existPerson.setMobileno(person.getMobileno());
		personRepository.save(existPerson);
		return existPerson;
	}
	
	public void deleteById(Integer id) {
		personRepository.deleteById(id);
	}
}
