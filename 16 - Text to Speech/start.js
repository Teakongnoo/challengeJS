(() => {
  // เริ่มเขียนโค้ด
const message = new SpeechSynthesisUtterance();

  function onVoicesChanged() {
    const voices = speechSynthesis.getVoices();
    const thvoice = voices.find(voice => voice.lang === 'th-TH');
    message.voice = thvoice;
  }

  function onClick(event) {
    message.text = event.target.getAttribute('alt');
    speechSynthesis.speak(message);
  }

  function run() {
    const imgElems = Array.from(document.querySelectorAll('img'));
    imgElems.forEach(imgElem => imgElem.addEventListener('click', onClick));
    
    speechSynthesis.addEventListener('voiceschanged', onVoicesChanged); //speechSynthesis browser is created normal
  }
  run();
})();
