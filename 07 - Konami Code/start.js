(() => {
  // เริ่มเขียนโค้ด
  const KonamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
  ];
  let index = 0;
  function onKeyDown(event){
    console.log(event.key);
    event.key === KonamiCode[index] ? index++ : index = 0;
    

    if(KonamiCode.length === index) {
      startSnowing();
    }
  }
  function run() {
    document.addEventListener('keydown',onKeyDown);
  }
  run();
})();
