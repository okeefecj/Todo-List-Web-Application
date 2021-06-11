package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {

	private static List<Todo> todos = new ArrayList<>();
	private static long idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "in28Minutes" , "Learn to Dance", new Date(), false));
		todos.add(new Todo(++idCounter, "in28Minutes" , "Learn about Microservices", new Date(), false));
		todos.add(new Todo(++idCounter, "in28Minutes" , "Learn to make Responsive Web pages", new Date(), false));
		todos.add(new Todo(++idCounter, "in28Minutes" , "Learn to make UML Diagrams", new Date(), false));

	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
}
