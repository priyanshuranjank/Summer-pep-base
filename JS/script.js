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

{/* <event-target>.addEventListner(<event-type>, function->action) */}


console.log("hello world");

setTimeout( function(){
  console.log("hello lpu"); 
},5000)

console.log("jai shree ram");

//callback - when you pass function as argument

function createOrder(cb) {
  console.log("order creation");
  cb();
}

function payOrder(cb) {
  console.log("payment done...");
  cb();
}

function createOrderSummary() {
  console.log("created order summary");
}

createOrder(() => payOrder(() => createOrderSummary()));
//    Bad side of call back
/*
01. call back inversion
02. Inversion of control
*/

// Callback Hell
/*
01. User login
02. Add items in cart
03. Create order
04. Pay order
05. Create order summary
06. Update wallet
*/

function login(cb) {
  console.log("User Logged in");
  cb();
}

function addItemToCart(cb) {
  console.log("Added items to cart");
  cb();
}

function createOrder(cb) {
  console.log("order creation");
  cb();
}

function payOrder(cb) {
  console.log("Payment Done..");
  cb();
}

function createOrderSummary(cb) {
  console.log("Created Order Summary");
  cb();
}

function updateWallet() {
  console.log("Update wallet");
}

login(()=>addItemToCart(()=>createOrder(()=>payOrder(()=>createOrderSummary(()=>updateWallet())))));
// this is a good exmpale of callback hell


//promise

/NOTE - Promises

//Defination
// Promise is an object which stores eventual completion or failure
//  of an asynchronous code

// function createOrder() {
//   console.log("Order created successfully!");
// }

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     createOrder();
//     resolve();
//   }, 2000);
// });

// console.log(promise);

//LINK - Callback hell via promise

/*
1. User Login
2. Add items to cart
3. Create Order
4. Pay order
5. Create Order summary
6. Update wallet

*/

const login = new Promise((res, rej) => {
  console.log("User Logged in");
  res();
});

const addItemToCart = new Promise((res, rej) => {
  console.log("Added items to cart");
  res();
});

const createOrder = new Promise((res, rej) => {
  console.log("Order creation");
  res();
});

const payOrder = new Promise((res, rej) => {
  console.log("Payment Done..");
  res();
});
const createOrderSummary = new Promise((res, rej) => {
  console.log("Created Order Summary");
  res();
});

function updateWallet() {
  console.log("Update wallet");
}

login.then(() => {
  addItemToCart.then(() => {
    createOrder.then(() => {
      payOrder.then(() => {
        createOrderSummary.then(() => {
          updateWallet();
        });
      });
    });
  });
});

//
//NOTE - Async Await

/*
1. User Login
2. Add items to cart
3. Create Order
4. Pay order
5. Create Order summary
6. Update wallet

*/

const login = () =>
  new Promise((res, rej) => {
    console.log("User Logged in");
    res({ name: "sriram" });
  });

const addItemToCart = () =>
  new Promise((res, rej) => {
    console.log("Added items to cart");
    rej("Failed to add item in cart!");
  });

const createOrder = () =>
  new Promise((res, rej) => {
    console.log("Order creation");
    res();
  });

const payOrder = () =>
  new Promise((res, rej) => {
    console.log("Payment Done..");
    res();
  });
const createOrderSummary = () =>
  new Promise((res, rej) => {
    console.log("Created Order Summary");
    res();
  });

function updateWallet() {
  console.log("Update wallet");
}

async function userBehaviour() {
  try {
    await login();
    await addItemToCart();
    await createOrder();
    await payOrder();
    await createOrderSummary();
    updateWallet();
  } catch (error) {
    console.log(error);
  }
}

userBehaviour();
