package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.Date;

public class Todo {

	private long id;
	private String userName;
	private String description;
	private Date targetDate;
	private Boolean isCompleted;

	public Todo(long id, String userName, String description, Date date, Boolean isCompleted) {
		super();
		this.id = id;
		this.userName = userName;
		this.description = description;
		this.targetDate = date;
		this.isCompleted = isCompleted;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
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

	public Boolean getIsCompleted() {
		return isCompleted;
	}

	public void setIsCompleted(Boolean isCompleted) {
		this.isCompleted = isCompleted;
	}
}
