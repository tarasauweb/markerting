window.addEventListener('load' , ()=>{
    function loader() {
        console.log(document.body.clientHeight)
        const loader = document.querySelector(".loader");
        const border = document.querySelector(".border");
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
      loader()
})