(() => {
  // เริ่มเขียนโค้ด
  const canvas = document.getElementById('painting');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const context = canvas.getContext('2d');

  let previousPoint = {x:0, y:0};

  function getDistance(previousPoint, CurrentPoint){
    return Math.sqrt((previousPoint.x - CurrentPoint.x ) ** 2 + (previousPoint.y - CurrentPoint.y)** 2);
  }
  
  function onMouseEnter({pageX, pageY}){
    previousPoint.x = pageX;
    previousPoint.y = pageY;
  }

  function onMouseMove({pageX, pageY}){
    const CurrentPoint = {x : pageX, y:pageY};

    context.beginPath();
    // Define line property
    context.lineCap = 'round';
    context.lineJoin = 'round';
    const distance = getDistance(previousPoint, CurrentPoint);
    const opacity = Math.min(0.5, 1/distance);
    context.lineWidth = (Math.random() / distance *40);
    
    context.strokeStyle = `rgba(222, 10, ${Math.random(Math.max(255))}, ${opacity})`;

    context.moveTo(previousPoint.x, previousPoint.y);
    context.lineTo(CurrentPoint.x, CurrentPoint.y);

    context.stroke();
    context.closePath();

    previousPoint = CurrentPoint;
  }

  function run(){
    canvas.addEventListener('mousemove',
    onMouseMove);
    canvas.addEventListener('mouseenter',onMouseEnter);
  }
  run();
})();
