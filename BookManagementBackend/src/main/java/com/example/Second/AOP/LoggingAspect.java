package com.example.Second.AOP;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {

	private final Logger Logger = LoggerFactory.getLogger(LoggingAspect.class);
	
//	@Before("execution (* com.telusko.springbootrest.service.JobService.getJob(..)) || execution(* com.telusko.springbootrest.service.JobService.updateJob(..))")
	@Before("execution ( * com.example.Second.BookService.findById(..))")
	public void logMethodcall(JoinPoint jp) {
		System.out.println("===Aspect is called===");
		Logger.info("Logger Method called "+jp.getSignature().getName());
	}
	
	@After("execution ( * com.example.Second.BookService.findById(..))")
	public void logMethodexec(JoinPoint jp) {
		System.out.println("===Aspect is called===");
		Logger.info("Logger Method executed "+jp.getSignature().getName());
	}
	
	@AfterThrowing("execution ( * com.example.Second.BookService.findById(..))")
	public void logMethodcrashed(JoinPoint jp) {
		System.out.println("===LoggingAspect is called===");
		Logger.info("Logger Method crashed "+jp.getSignature().getName());
	}
	
	@AfterReturning("execution ( * com.example.Second.BookService.findById(..))")
	public void logMethodExecutedSuccesful(JoinPoint jp) {
		System.out.println("===Aspect is called===");
		Logger.info("Logger Method executed succesfully "+jp.getSignature().getName());
	}
}
