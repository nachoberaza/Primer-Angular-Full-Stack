package com.restfulwebservices.todo;

import java.util.Date;

public class Todo {
	
	private Long id;
	private String username;
	private String description;
	private Date targetDate;
	private boolean isDone;
	
	public Long getId() {
		return id;
	}
	public Todo(Long id, String username, String description, Date date, boolean isDone) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.targetDate = date;
		this.isDone = isDone;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	public boolean isDone() {
		return isDone;
	}
	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}
	
}
