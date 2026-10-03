package com.example.Second;

import java.util.List;


import org.springframework.stereotype.Service;



@Service
public class BookService {
	final BookRepository br;

	BookService(BookRepository br) {
		this.br = br;
	}
	
	public List<Book> getAllBooks(){
		return br.findAll();
		}
    
	public Book findById(int id) {
		//int num=10/0;
		return br.findId(id);
		}
	public List<Book> saveBook(Book book) {
		List<Book> bookList = br.save(book);
		return bookList;
	}
	
	public String updateBook(int id,Book book) {
		br.update(id, book);
		return "Updated Succesfully";
	}
	
	public String deleteBook(int id) {
		br.delete(id);
		return "Book Deleted Succesfully";
	}
}
