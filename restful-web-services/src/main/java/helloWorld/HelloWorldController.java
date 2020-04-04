package helloWorld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/hello world/")
//CrossOrigin(origins="http://localhost:4200")

public class HelloWorldController {

	//-------------------- GET
	
	//-------------------- URI
	
	//-------------------- Method - "Hello World"
	
	@RequestMapping(method=RequestMethod.GET,path="/hello world")
	public String helloWorld(){
		return "Hello World";
	}
	
	@GetMapping("/hello world-bean")
	public HelloWorldBean helloWorldBean(){
		throw new RuntimeException("Some error has happened");
		//return new HelloWorldBean("Hello World");
	}
	
	@GetMapping("/hello world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
		return new HelloWorldBean(String.format("Hello World, %s",name));
	}
	
	
}
