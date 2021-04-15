//FUNCTION for left-side NAV Progress bar indicator ########################
function pageDepth() {
    let ScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    let ViewportHeight = window.innerHeight;
    let DocumentHeight = document.body.clientHeight;
    let progressbarUpdate = (ScrollTop / (DocumentHeight - ViewportHeight)) * 50 + "%";
    let x = document.getElementById("progressbar");  
    x.style.top = progressbarUpdate;

    /*
    var progressBarTop = parseInt(window.getComputedStyle(
        document.getElementById('progressbar')).top, 10);

    var progressBarContent2 = document.getElementById('progressBarNumber');
    
    
    var windowHeight = window.innerHeight;
    var scrollProgress = (progressBarTop/windowHeight)*2;


    if (scrollProgress <= 0.15) {
        progressBarContent2.textContent = "01"
    } else if ((0.15 < scrollProgress) && (scrollProgress <= 0.4)) {
        progressBarContent2.textContent = "02"
    } else if ((0.4 < scrollProgress) && (scrollProgress <= 0.65)) {
        progressBarContent2.textContent = "03"
    } else if (0.75 < scrollProgress) {
        progressBarContent2.textContent = "04"
    }
    */
  }

//Function for left side content element
//const progressbar = document.getElementById("progressbar");
//console.log(progressbar.style);