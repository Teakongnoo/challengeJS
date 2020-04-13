(() => {
  // เริ่มเขียนโค้ด
  /// Array.from is function convert Nodelist to Array
  let  dragingElem;

  function onDragStart(){
   dragingElem = this;
   console.log('Drag')
 }

 function onDrop() {
  this.append(dragingElem);
  dragingElem = null;
  //console.log('drop')
 }
 function onDragOver(event){
   event.preventDefault();
   console.log(event)
 }
 function onDragEnter(event) {
   event.preventDefault();
 }

  function run() {
    const taskElems = Array.from(document.querySelectorAll('.task'));
    const dropZoneElems = Array.from(document.querySelectorAll('.drop-zone'));

    taskElems.forEach((taskElem) => {
      taskElem.addEventListener('dragstart', onDragStart);
    });
    
    dropZoneElems.forEach((dropZoneElem) =>{
      dropZoneElem.addEventListener('drop', onDrop);
      dropZoneElem.addEventListener('dragover', onDragOver);
      dropZoneElem.addEventListener('dragenter', onDragEnter);
    });
  }
  run();
})();
