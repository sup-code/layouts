AOS.init()


window.onload = function (param) {
      let btn = document.getElementById("btn");
      let sideBar = document.querySelector(".slide-bar")
      let closeSide = document.querySelector(".close-side")
      let path = document.querySelector("#wave path")
      let from = path.getAttribute("d")
      let to = path.dataset["to"]
      let liens = document.querySelector("#big-move")

      let options = {
        type: dynamics.easeOut,
        duration: 450,
        friction: 450
      }



      let isActive = false
      btn.addEventListener("click",(e)=>{
        e.stopPropagation()
        e.preventDefault()

        if (isActive === false) {
            dynamics.animate(path, {
                d: to
              }, options)

            liens.classList.remove("to400")
            sideBar.classList.add("side-active")
            isActive = true 
        }  
      })

      closeSide.addEventListener("click",(e)=>{
        e.stopPropagation()
        e.preventDefault()
          if (isActive === true) {
            dynamics.animate(path, {
                d: from
              }, options)
              liens.classList.add("to400")
              sideBar.classList.remove("side-active")
              isActive = false
          }
      })

  




}