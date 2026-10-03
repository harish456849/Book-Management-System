package com.example.Second;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public class BookRepository {

	
	private List<Book> bookList = new ArrayList<>();
	
	public BookRepository() {
		bookList.add(new Book(1, "Java-Basics", "John Doe"));
		bookList.add(new Book(2, "Spring-Boot Guid", "Jane smith"));
	}
	//1.Showing All Books
	public List<Book> findAll(){return bookList;}
	
	//2.Searching Book
	public Book findId(int id) {
		for(Book book:bookList) {
			if(book.getId() == id) {
				return book;
			}
		}
		return null;
	}
	
	//3.Saving Book
	public List<Book> save(Book book) {bookList.add(book); return bookList;}
	
	//4.Updating Book details
	public void update(int id,Book updateBook) {
		for(Book book:bookList) {
			if(book.getId()==id) {
				book.setTitle(updateBook.getTitle());
				book.setAuthor(updateBook.getAuthor());
			}
		}
	}
	//5.Deleting Book using lamda function
	public void delete(int id) {bookList.removeIf(b -> b.getId() == id);}
	
}
