function myFunction() {
    var x = document.getElementById("sidenav");
    if (x.style.right === "0px") {
      x.style.right = "-3000px";
    } else {
      x.style.right = "0px";
    }
    var x = document.getElementById("leftclose");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
