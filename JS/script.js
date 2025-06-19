// var a;
// a = 10;
// console.log(a);

// function get(){
//   var  a ;
//   a = 10;
  
   

//    function print(){
//     let c = 11;
//     console.log(c);
//    }

//    print();

//     // console.log(c);

//     console.log(a);

// }

// get();

// console.log(a);



var a = 30; //global scope

function get(){
  let a = 10; //local

      function print(){
        // let a = 20;
        // console.log(20); //local
        console.log(a);
        
      }

      print();
  }

  get();

  // scopes
  // hoisting
  // closure
  // func $ types
  // callback

// hoisting
console.log(a);

const a = 'lpu'

get();

function get(){
  var a = "lpu"
  console.log(a);
  
}

//data types  - primitive data type store in stack memory
 var a = 5;
 var b = a;
 console.log(a, b);

     //reference - store in heap memory
  let obj1 = {
    a: 1,
    b: 2
  }
  let obj2 = obj1;

  console.log(obj1);
  console.log(obj2);

  obj1.a = 10;
  obj2.b = 20;

  console.log(obj1);
  console.log(obj2);
  
  //NOTE - Operators:

/*
1. Arithematic Operator

+, -, *, /, //, %

2. Comparision Operator

>, <, ==, ===, !=

3. Assignment Operator
=, +=, -=, *=, /=

4. Ternary Operator

expression ? statement: statement

5. Logical Operator
&&, ||, !, ?? 

6. Bitwise Operator

&, |, ^

7. typeof Operator

typeof

*/

let a = 3;
let b = "3";

console.log(a == b);
console.log(a === b);

console.log((a += 3)); //a = a+3

console.log(a > 3 ? "Hello" : "Hi");

a = null;

console.log(a ?? "hello");

console.log(typeof b);

// DOM concepts


// get element by Id
document.getElementById("ID_name");

//get element by class name
document.getElementsByClassName("tag_name")

//get element by tag name
document.getElementsByTagName('p');

//get element by name
document.getElementsByName("name_of_the_name")  // for input or forms

//query selector( returns only the first parsed element)

document.querySelector("#fpara")
document.querySelector(".text_para")

// for all

document.querySelectorAll("#fpara");


// ------------------>   // UPDATE EXISTING ELEMENTS

// Events and Listeners

monitorEvents(document);
unmonitorEvents(document);

// syntax of event Listner

<event-target>.addEventListner(<event-type>, function->action)


