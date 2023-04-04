window.addEventListener("load", () => {
  const border = document.querySelector(".border");
  function loader() {
    console.log(document.body.clientHeight);
    const loader = document.querySelector(".loader");
    const dot = ".";
    let count = 0;
    const timer = setInterval(() => {
      count++;
      loader.textContent += dot;
      if (count > 3) {
        loader.textContent = "";
        clearInterval(timer);
        count = 0;
      }
    }, 700);
    setTimeout(() => {
      border.classList.add("active-border");
    }, 4500);
    setTimeout(() => {
      loader.style.display = "none";
    }, 5000);
  }
  loader();

  function scrolling() {
    const body = document.body;
    const focusTitle = document.querySelector('.focus__title')
    const arrColors = [
      "#161616",
      "#3358D5",
      "#690000",
      "linear-gradient(144.42deg, #B4BDDB 18.43%, #E3E6EE 50.53%, #B4BDDB 82.62%)",
    ];
    const mainBlock = document.querySelector("main");
    let startPosition = 0;
    let count = 0;
    const changePosition = 100;
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowDown") {
        changeContentIn()
        if(count === 1){
          border.classList.add('focus-border');
          border.classList.remove('active-border');
          setTimeout(() => {
            focusTitle.classList.add('active-blur')
          }, 2000);
        }
      }  else if(e.code === 'ArrowUp') {
        changeContentOut()
        if(count === 0){
          border.classList.remove('focus-border');
          border.classList.add('active-border');
          focusTitle.classList.add('active-blur')
        }
      }
    });
    window.addEventListener('mousewheel' , (e)=>{
      let deltay = e.deltaY
      if(deltay>0){
        changeContentIn()
        if(count === 1){
          border.classList.add('focus-border');
          border.classList.remove('active-border');
          setTimeout(() => {
            focusTitle.classList.add('active-blur')
          }, 2000);
        }
      }
      else{
        changeContentOut()
        if(count === 0){
          border.classList.remove('focus-border');
          border.classList.add('active-border');
          focusTitle.classList.add('active-blur')
        }
      }
    })
    function changeContentIn() {
      count++;
      body.style.background = arrColors[count];
      startPosition += changePosition;
      mainBlock.style.transform = `translateY(-${startPosition}vh)`;
    }
    function changeContentOut() {
      count--;
      body.style.background = arrColors[count];
      startPosition -= changePosition;
      mainBlock.style.transform = `translateY(-${startPosition}vh)`;
    }
  }

  scrolling();
});
