// let result = document.querySelector(".result");
//     let btns = document.querySelector(".buttons");
//     let ops = document.querySelectorAll(".operator");
    
    // let buttons = document.querySelectorAll(".buttons")
    // console.log(buttons);
    // for(let button of buttons) {
    //   buttons.addEventListener('click', function() {
    //   )
    //   }
      
    // }

    function getButton () {
      let buttons = document.querySelectorAll(".buttons");
      console.log(buttons)
      let display = document.querySelector(".result");
      for (let button of buttons) {
        console.log(button.textContent);
        button.addEventListener("click", function () {
          alert(button.textContent);
        })
      }
    }

    getButton();

