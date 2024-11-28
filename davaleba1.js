for (i=2; i<=8; i++) {
    console.log(i)}


console.log("-----------------")  


    for (i=5; i<35; i=i+4) {
        console.log(i);  }    

 console.log("-----------------")   
 
 
 ნამრავლი=1
 for (i=3; i<8; i++) {

    ნამრავლი=i*ნამრავლი
    console.log(ნამრავლი)
   }

   console.log("-----------------")   

   let person =  {firstName: "Tamar",
    lastName: "Bendeliani",
    age: 35
   }
   console.log(person.firstName+ " " + person.lastName);

   console.log("-----------------") ;  

   for (key in person) {
    console.log(person[key]);
   }
   
   console.log("-----------------")   

   let fruits = ["Apple", "Banana", "Orange"];{
    for (key in fruits) 
        console.log(fruits[key])
   }
   console.log("-----------------") 

   fruits.unshift ("Grapes");
   fruits.push ("Pineapples");{
    console.log (fruits)
   }
   console.log("-----------------") 

let sum=0
for (i=1; i<34; i++){
    sum=sum+i
    console.log ("sum", sum)
}
