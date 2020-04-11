(() => {
  // เริ่มเขียนโค้ด

  // 1. Lexical scope & Dynamic scope
  // 'this' : in this case is return window global object current 
  function printName1(){
    console.log(this);
  }
  printName1();
  // 2. How to know what is "this"?
  function printName2(){
    console.log(this);
    console.log(`My Name is ${this.name}`)
  }
  //// 2.1 Invoker object
  const tirapong = {name : 'Tirapong', printName2 : printName2};
  const orn = {name : 'ORN', printName2};
  // Upper line In ES6 can shortcut code to
  //const tirapong = {name: 'Tirapong', printName2}
  tirapong.printName2();
  orn.printName2();
  //// 2.2 Global object (window, global)
  name = 'Global'; // this variable is not define variable  type then javascript is assign to global variable
  printName2();
  //// 2.3 Constructor function
  function Person(name) { // If function Name is start by Uppercase is constructure function
    this.name = name;
    this.printName2 = printName2;
  }

  const person = new Person('tea');
  person.printName2();
  // 3. call(), apply(), and bind()
  function printName3(nationality, city){
    console.log(this);
    console.log(`My Name is ${this.name}. I am ${nationality}, I living in ${city}`)
  }
  function Person2(name, nationality, city){
    this.name = name;
    this.nationality = nationality;
    this.city = city;

    printName3(this.nationality, this.city);
    printName3.call(this, this.nationality, this.city);
    printName3.apply(this, [this.nationality, this.city]);
  
    const printbind = printName3.bind(this);
    printbind(this.nationality, this.city);
  }
  const tirapongT = new Person2('Tirapong.T', 'Thai' , 'Bangkok')
})();
