window.onload = function (param) { 
    let nav = document.querySelector(".navbar");
    let slog = document.querySelector(".slog")
    let Header = document.querySelector("header")
    navHeight = nav.clientHeight

    slog.style.position = "relative";
    slog.style.top = navHeight*1.5 + "px";

    document.addEventListener("scroll",function (e) {  
        console.log(Header.getBoundingClientRect().bottom <= nav.getBoundingClientRect().bottom);
    })

    
    

}