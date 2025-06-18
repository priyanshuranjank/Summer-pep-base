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