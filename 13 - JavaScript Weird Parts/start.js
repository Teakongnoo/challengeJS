(() => {
  // เริ่มเขียนโค้ด

  // 1. NaN  Not a Number
  // NaN is Primitive like null
  if(NaN === NaN){
    console.log('Equal');
  } 
  // result is false because cannot 
  // compair NaN with the top if 
  // but can compair by function Number.isNaN();
  // Example Number.isNaN();
  const result = 1/ 'hello';
  if(Number.isNaN(result)){
    console.log('Equal To NaN');
  }


  // 2. Type Coercion
  if (1<2<3){
    console.log('true');
  } //result is true
  if(3>2>1){
    console.log('true');
  } //result is false because JS convert type to 
  // 3>2 is true and (true>1) then false
  console.log(2 - '1'); //result is 1 because JS convert '1' is text to number
  console.log(2 + '1'); // result is 21 because JS convert to text concat Text
  // IF want result console.log(2 + '1'); to 1 ,can solve it console.log(2 + Number.parseInt('1')); 
  console.log(true + true); // result is 2
 
  // 3. Interpreter & Compiler
  /** //if { is on incorrect position result is undefined
    function getPerson(){
    return 
    {
      name: 'Tirapong'
    } ";
    "
  }
   */
  function getPerson(){
    return {
      name: 'Tirapong'
    };
  }
  console.log(getPerson());
  // 4. Checking Object Type
  // In JS Null is Object Toooo
  const person = {};
  if (typeof person === 'object' && person !== null){
    console.log('Yes, Object');
  }
})();
