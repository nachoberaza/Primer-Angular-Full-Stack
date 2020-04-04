package com.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class HardcodeTodoService {
	
	private static List<Todo> todos=new ArrayList();
	private static int idCounter=0;
	
	static {
		todos.add( new Todo((long) ++idCounter,"nachoberaza","Learn to dance",new Date(),false));
		todos.add( new Todo((long) ++idCounter,"nachoberaza","Learn Angular",new Date(),false));
		todos.add( new Todo((long) ++idCounter,"nachoberaza","Learn to Fly",new Date(),false));
	}
	
	public List<Todo> findAll(){
		return this.todos;
	}
}
