package com.mahrukh;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mahrukh.dao.Todorepository;
import com.mahrukh.model.Todo;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class TodoApplication {

	
	@Autowired
	private Todorepository repo;
	
	//post
	@PostMapping("/add")
	public void postTodo(@RequestBody Todo todo) {
		repo.save(todo);

	}
	//get
	@GetMapping("/allTodos")
	public List<Todo> getAllTodos(){
		return repo.findAll();
	}
	//update
	public void updateTodo() {
		
	}
	
	//delete
	@DeleteMapping("/deleteTodo/{id}")
	public  List<Todo> deleteTodo(@PathVariable int id) {
		repo.deleteById(id);
		if (repo.count() == 0) {
			repo.deleteAll();
		}
		return repo.findAll();
	}
	
	
	

	public static void main(String[] args) {
		SpringApplication.run(TodoApplication.class, args);
	}

	
}
