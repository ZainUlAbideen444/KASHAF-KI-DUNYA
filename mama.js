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

// Q2:- WRITE A FUNCTION THAT ALLOWS A FUNCTION TO BE CALLED ONLY ONCE
// function once(fn){
//     let called = false;
//     return function(...args) {
//         if(!called){
//             called = true;
//             return fn(...args)}
//         else{
//             console.log("already called");
            
//         }
//         };
//     }
    

// const newfunc= once(()=>
//     console.log("hi"));    
// newfunc();
// newfunc();


// discounter

// function Discounter(valper){
//     return function(price){
//         return price - (price*valper/100);
//     };
// }

// afterval = Discounter(20);
// console.log(afterval(200));

// LOGGER
// function eror(pop){
//     return function(message){
//         console.log(`${pop}  ${message}`);
        
//     };
// }

// const newErr = eror("Takhta");
// newErr("Babu g ")

// function PassCheck(correctpassword){
//     return function(password){
//        return password === correctpassword
//         ? "Access granted"
//         : " wrak sha hacker";
//     };
// }

// const check = PassCheck("zainkhan");
// console.log(check("hack"));
// console.log(check("zainkhan"));




// function passcheck(correct){
//     return function(pass){
//         return pass === correct
//         ? "malik"
//         : "chor"
//     }
// }

// const check = passcheck("zain")
// console.log(check("kashaf"));
// console.log(check("zain"));


// ARRAYY
// its a data structure which is used to store a big data which can be added, removed, modified..
// [1,2,3,4,5] indexed by whole number

// let arr =[1,2,3,4,5];
// let newarr = arr.reverse();
// console.log(arr);
// console.log(newarr);

// let arr = ["banana", "apple",
//     "mango"
// ]
// let sr= arr.sort();

// console.log(arr);


// let arr= [3,2,1,5,6]
// let sr = arr.sort(function (a,b){
//     return (b-a)
// });
// console.log(arr);


// ,MAP,FILTER,REDUCE, FOR-EACH
// FOR LOOPS:- IT IS A BASICALLY A FOR LOOP OF ARRAY WHICH RUN FOR EACH OF THE VALUE

// let arr=[2,4,6,8,10];
// arr.forEach(function(val){
//     console.log(val-2);
    
// })

// MAP 
// isko tab use karna jb apko ek naya array banana hai pichle array ke data ke basis par,same member b hongy or kind of same data b

// let arr = [2,4,6,8,10];
// let newarr = arr.map(function(val){
//     return val/2;
// });

// console.log(arr);
// console.log(newarr);

// FILTER
// filter me naya array banaty ha but filter karke apni marzi

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let newarr= arr.filter(function(val){
//    if(val%3===0)
//     return true;
// });
// console.log(newarr);

// Reduce
// in reduce , we reduced all values to a single value
// acuummulator wo hai jo apni value yaad rakhta hai

// let arr=[10,20,30,40,50];
// let redu = arr.reduce (function(accumulator,val){
//     return accumulator-val;
// },0); 

// console.log(redu);
// console.log(arr);


// ARRAY DESTRUCTION
// let arr =[1,2,3,4];
// let  [a,b, ,c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// OBJECT
// entity (user) agar ek ho to object banate hai, lekin agar ek se zyada ho to array bnate hai.
// object ko hum dot notation .   {.objectname}  ya bracket notation obj[];
// deep access jab hum bohut deep jaake usko access karsake

// let user ={
//     name : "kashaf",
//     age : " baby",
//     smile: "cute",
// address :{
//     city : "gujranwala",
// location : {
//     lat : 23.2,
//     lng : 74,
// }
// }
// };

// FOR IN

// let obj = {
//     name : "coco",
//     age : 20,
//     email : "abc@testnet.com",
//     addresses:{
//         city : "goa"
//     }
// }

// // for(let key in obj=>obj ka name){
// // console.log(key,obj[key])}

// let obj2 = {...obj}; // spread operator
// obj2.address.city="swat";

// console.log(obj);
// console.log(obj2);


// deep clonning:-

// let obj2 =JSON.parse(JSON.stringify(obj));
// obj2.address.city= "lahore"
// console.log(obj2);
// console.log(obj);

// optional chaining

// console.log(obj.names);




// let obj = {
// a: 5,
// b:10,
// c:15 }

// for(let key in obj){
//     console.log(obj[key]*2);
    
// }








