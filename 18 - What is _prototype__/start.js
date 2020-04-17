(() => {
  // เริ่มเขียนโค้ด

  // 1. Class vs Prototype 
  // Class มีประโยชน์ คือทำให้เราสร้าง Prototype ได้ง่ายขึ้น
    class Person {

    }

    const tirapong = new Person();
    console.log(tirapong)

  // 2. What's prototype?
  const name = 'tirapong';
  console.log(name.__proto__);

  const arr = [];
  console.log(arr.__proto__);
  
  // 3. Prototype chain
  // คือการเรียกใช้ Method ที่ Object Parent
  const namePrototype = 'tirapong';
  console.log(name.__proto__);
  console.log(name.toLocalString);

  // 4. Extend a prototype
  const nameExtendPrototype = 'Tirapong';
  function sayHello(val) {
    console.log(`Hello : ${val}`)
  }  
  String.prototype.sayHello = sayHello;
  console.log(nameExtendPrototype.__proto__);
  String.prototype.sayHello('val');
})();
