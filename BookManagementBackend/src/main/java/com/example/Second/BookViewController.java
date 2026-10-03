package com.example.Second;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/view")
public class BookViewController {
 
	public String viewBooks() {
		return "index";
	}
}
