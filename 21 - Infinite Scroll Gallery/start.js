(() => {
  // เริ่มเขียนโค้ด
  const accessKey = 'UvLLrhZ3RsIqeKQkXScLKwZLHgep8C3sF3R7r1aKZno';
  const secretKey = 'NCkam2T2AAjKW-qLe9ZLgf4dr45J_bgrSwHKGYhUVGc';
  const loadElem = document.querySelector('.loader');
  let page = 1;

  function showLoader(){
    loadElem.classList.add('visible');
  }

  function hideLoader(){
    loadElem.classList.remove('visible');
  }

  async function displayImages(){

    showLoader();

    const result = await fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}&page=${page}`);
    const images = await result.json();

    const galleryElem = document.querySelector('.gallery');
    images.forEach(image => {
      const imgElem = document.createElement('img');
      imgElem.src = image.urls.small;

      galleryElem.appendChild(imgElem);
      
    });

    hideLoader();

    page += 1;
  }

  function onScroll(){
    const { scrollTop, clientHeight, scrollHeight} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight - 10 ){
      displayImages();
    }
  }

  function run(){
    document.addEventListener('scroll', onScroll);
    displayImages();
  }

  run();
})();
