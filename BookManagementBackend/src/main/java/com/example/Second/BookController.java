package com.example.Second;

import java.util.List;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/books")
public class BookController {
	private final BookService bs;

	BookController(BookService bs) {
		this.bs = bs;
	}
   
	/*@GetMapping("/form")
	public String showForm() {
		return "index";
	}*/
	
	
	@GetMapping
	public List<Book> getAllBooks(){
		return bs.getAllBooks();
	}
	
	
	@PostMapping("/save")
	public List<Book> addBook(@Valid @RequestBody Book book) {
		List<Book> bookList = bs.saveBook(book);
		return bookList;
	}
	@GetMapping("/get/{id}")
	public Book getBook(@PathVariable int id) {
		return bs.findById(id);
	}
	
	@PutMapping("/update/{id}")
	public String update(@Valid @PathVariable int id,@RequestBody  Book book) {
		String str= bs.updateBook(id, book);
		return str;
	}
	
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id) {
		String str = bs.deleteBook(id);
		return str;
	}
	
}
