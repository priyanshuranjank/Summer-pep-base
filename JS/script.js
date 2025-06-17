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

  // hoisting
  // closure
  // func $ types
  // callback
  