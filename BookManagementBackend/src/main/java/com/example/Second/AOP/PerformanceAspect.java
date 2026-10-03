package com.example.Second.AOP;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
@Component
@Aspect
public class PerformanceAspect {
	private static Logger Logger = LoggerFactory.getLogger(PerformanceAspect.class);
	
	@Around("execution ( * com.example.Second.BookService.findById(..))")
	public Object monitorTime(ProceedingJoinPoint pjp) throws Throwable{
		long start = System.currentTimeMillis();
		
		Object obj = pjp.proceed();
		
		long end = System.currentTimeMillis();
		System.out.println("===PerformenceAspect is called====");
		
		Logger.info("The time taken by "+pjp.getSignature().getName()+" is: "+(end-start)+" ms");
		
		return obj;
		
	}
}
