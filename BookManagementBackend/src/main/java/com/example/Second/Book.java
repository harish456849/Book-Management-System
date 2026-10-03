package com.example.Second;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Books")
public class Book {
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	@Id
	@Getter
	@Setter
	@Column(name="Id")
	private int id;
	@Getter
	@Setter
	@NotBlank(message = "Title Should Not be Empty.")
	@Column(name="Title")
	private String title;
	@Getter
	@Setter
	@NotBlank(message = "Author Should not be Empty.")
	@Column(name="Author")
	private String author;

	public Book() {
	}

	public Book(int id, String title, String author) {
		this.id = id;
		this.title = title;
		this.author = author;
	}

	
}
