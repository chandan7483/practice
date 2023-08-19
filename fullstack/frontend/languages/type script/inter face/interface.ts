


interface Person {   
    name:string  
    age:number
     gender:string  
    empCode:number 
    secandname:any
 }  
  
     
 
 let empObject = <Person>{};   
 empObject.name = "Abhishek"  
 empObject.age = 25   
 empObject.gender = "Male"  
 empObject.empCode = 43  
 empObject.secandname = 45
 console.log( empObject);