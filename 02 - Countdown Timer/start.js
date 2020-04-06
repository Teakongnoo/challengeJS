(() => {
  // เริ่มเขียนโค้ด
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR   = MINUTE * 60;
  const DAY    = HOUR *24;
  function setElementinnerText(id, text){
    const element =  document.getElementById(id);
    element.innerText= text;
  }
  function countDown(){
    const now = new Date().getTime();
    const newYear = new Date('December 31, 2020 23:59:59').getTime();
    const unixTimeleft = newYear - now;

  /*
  // This Comment convert to function setElementinnerText
    const dayElem = document.getElementById('days');
    dayElem.innerText = Math.floor(unixTimeleft/DAY);
    const hourElem = document.getElementById('hours');
    hourElem.innerText = Math.floor((unixTimeleft%DAY)/HOUR);
    const minuteElem = document.getElementById('miniutes');
    hourElem.innerText = Math.floor((unixTimeleft%DAY)%HOUR);
    const secondElem = document.getElementById('seconds');
  */
    setElementinnerText('days', Math.floor(unixTimeleft/DAY));
    setElementinnerText('hours', Math.floor((unixTimeleft % DAY)/HOUR));
    setElementinnerText('minutes', Math.floor((unixTimeleft % HOUR)/MINUTE));
    setElementinnerText('seconds', Math.floor((unixTimeleft % MINUTE)/SECOND));
  }

  function run(){
    setInterval(() => {
      countDown();
    }, SECOND); 
  }
  run();
})();
