(() => {
  // เริ่มเขียนโค้ด
  function onScroll(){
    const moonElem = document.querySelector('.moon');
    const wishElem = document.querySelector('.wish');

    moonElem.style.transform =  `translate(${window.scrollY * 2}%, ${window.scrollY *-2}%`;
    console.log(window.scrollY);
    wishElem.style.transform =  `translateY(${window.scrollY * - 1.2}%)`;
  }

  function run(){
    document.addEventListener('scroll', onScroll)
  }
  run();
})();
