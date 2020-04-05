package net.guides.springboot2.springboot2jpacrud.exception;

import java.util.Date;

public class ErrorDetails {
	private Date timestamp;
	private String message;
	private String details;

	public ErrorDetails(Date timestamp, String message, String details) {
		super();
		this.timestamp = timestamp;
		this.message = message;
		this.details = details;
	}

	public Date getTimestamp() {
		//System.out.println("Timestamp: ");
		return timestamp;
	}

	public String getMessage() {
		//System.out.println("Message: ");
		return message;
	}

	public String getDetails() {
		//System.out.println("Details: ");
		return details;
	}

}
