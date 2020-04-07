(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript
  function simulateAsynAPI(text, timeout){
    setTimeout(() => console.log(text), timeout);
  }
  simulateAsynAPI('simulateAPI: A',1000);
  simulateAsynAPI('simulateAPI: B',500);
  simulateAsynAPI('simulateAPI: C',100);
  // 2. Callback
  function simulatecallBack(text, timeout, callback){
    setTimeout(() => {
      console.log(text)
      
      if(callback){
        callback();
      }
    }, timeout);
  }
  /// For Advance  use by Callback////
  function resolveCallback(){
    console.log('CallBack');
  }
  ///// End /////
  /// callback hell /////
 /* simulatecallBack('simulatecallBack: A', 1000, () => {
    simulatecallBack('simulatecallBack: B', 500, () => {
      simulatecallBack('simulatecallBack: C', 100)
    })
  });*/
  // 3. Promise
  function simulatePromise(text, timeout){
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        if(text === 'CAT') return reject('THIS IS REJECT');
        console.log(text);
        resolve();  // function use when finish promise
      }, timeout);
    });
  }
  simulatePromise('A', 1000)
      .then(() => {
        return simulatePromise('B', 500);
      })
      .then(() => {
        return simulatePromise('A', 100);
      })
      .catch((error) =>{   //// For Reject ERROR ////
        console.error(error);
      })

  // 4. Async/Await
  // This is Technique is like Promise 
  // But in function to use have async before function
  // and await before fuction name when use 
  // when error can resolve that by use try{} catch(error){}
  async function run(){
    try{
      await simulatePromise('Async A',1000);
      await simulatePromise('Async B', 500);
      await simulatePromise('Async C', 100);
    } catch(err){
      console.error(error);
    }
  }
  run();
})();
