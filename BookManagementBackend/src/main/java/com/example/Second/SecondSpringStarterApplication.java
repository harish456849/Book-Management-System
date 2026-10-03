package com.example.Second;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class SecondSpringStarterApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecondSpringStarterApplication.class, args);
	}

}
