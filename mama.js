// for(let i=1; i <= 20; i++){
//   if(i %2===1){
//     console.log(`odd number is ${i}`);
    
//   }
// }

// function are block of code to perform a specific task
// reusable 
// numbers, keywords, special characters, operators,
//  hum jo bhi code likhty wo foran run hojata hai, lekin function tab run hota hai jab hum usay call karte hain

// function add(v1,v2){
//   console.log(v1+v2);
  
// }
// add(5,5);

// rest operators
// function gulab(...val){
//   console.log(val);
  
// }
// gulab(1,2,3,4,5,6,7,8,9,10);

// add ();

// let fnc = function add() {
//   console.log("Hello, I am a function");
  
// }
// function greet(val){
//   return 0;
// }
 
// let salam = greet(5);
// console.log(salam);

// let multiply= (a,b)=>
//   {
//   return a * b;
// }

// function checkage(age){
//   if (age <18)
//     return " not allowed"; 
//     return " allowed";
// }

// console.log(checkage(15)); // 

// function door(key){

//   key();
//   }
// door(function(key){
//   console.log("I am a key");
// });
// let age=15;
// if(age===18){
// console.log("come inside");
// }
// else{
//     console.log("go back");
    
// }

// function gobi(a,b,c,...val){
//     console.log(a,b,c,val);
    
// }
// gobi(1,2,3,4,5,6,7,8,9,10); 

// function CheckAge(age) {
// if (age < 18)
// return "not allowed";
// return "allowed";
// }

// console.log(CheckAge(20)); 
// console.log(CheckAge(20));
// console.log(CheckAge(20));

// console.log(CheckAge(20)); 
// console.log(CheckAge(20));
// console.log(CheckAge(20));

// console.log(CheckAge(20)); 
// console.log(CheckAge(20));
// console.log(CheckAge(20));


// first class function 
// function ko value ki tarah treat karna
// let val=function value(){
//     console.log("Hello, I am a function");
// }
// val();

// Higher order function
// jo return kare ek or function apne parameter ke tor par

// function coco(motu){
// return motu(a,b)
   
// };

// coco(motu);

// Pure & Impure Functions
// aisa fnc jo bahar ki variable ko change na kare, ya usay use na kare pure function kehlata hai
// aisa fnc jo bahar ki variable ko change kare ya usay use kare impure function kehlata hai

// let a=12;
// function abc(){
//     a++;
// }
//  abc();
//  console.log(a);
 


// closure interview question
// ak fnc jo return kare ek or fnc ko, jo apne parent scope ki variable ko access kar sake

// function abcd(){
//     let a=10;
//     return function(){
//         console.log(`a`, a);
//     }
// }

// abcd();

// function coco(){
//     let val= 0;
//     return function(){
//         console.log(val);
        
//     }
// }
// coco()();

// lexical scope

// function abc(){
//     let a="motu";
   
    
//     def();
   
//     function def(){
//         let b="chotu";
//         ghi();
//         function ghi(){
//             let c="Kashaf";
//             console.log(a, b, c);
//         }
       
//     }
     
// }
// abc();

//  IIFE (Immediately Invoked Function Expression)
// iske andar kj b likoge wo chaljaega call karne ki need nahi already called , first function then bracket

// (function(){
//     console.log("kashaf is a orange beauty");
    
    
// } 
// ) ();

// function user(age){
//     return function(){
//        return `your age is ${age}`;
//     }   
// }

// const newage = user(35);
// console.log(newage());

// function pharma(job){
//     return function(){
//         return `your job is ${job}`;
//     }
// }

// const newjob = pharma( "medical rep");
// console.log(newjob());

// console.log("job is mr");

// function once(fn) {
//     let called = false;
//     let result;
//     return function(...args) {
//         if (!called) {
//             called = true;
//             result = fn.apply(this,args);
//         }
//         return result;
//     };
// }


