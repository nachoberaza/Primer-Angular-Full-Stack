package com.restfulwebservices.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.restfulwebservices.todo.Todo;


@RestController
//@RequestMapping("/hello world/")
//CrossOrigin(origins="http://localhost:4200")
public class TodoResources {
	
	@Autowired
	private HardcodeTodoService todoService;
	
	@GetMapping("users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String Username){
		return todoService.findAll();
	}
	
}
