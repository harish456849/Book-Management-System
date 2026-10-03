package com.example.Second.AOP;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@Aspect
@Component
public class ValidationAspect {
	private static Logger Logger = LoggerFactory.getLogger(ValidationAspect.class);
	@Around("execution ( * com.example.Second.BookService.findById(..)) && args(Bookid)")
	public Object validateBookId(ProceedingJoinPoint pjp, int Bookid) throws Throwable{
		if(Bookid<0) {
			System.out.println("===ValidationAspect is called====");
			Logger.info("BookId is negative");
			Bookid = -Bookid;
			Logger.info("New Value: "+ Bookid);
		}
		
		Object obj = pjp.proceed(new Object[] {Bookid});
		
		return obj;
	}
}
