(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "April 22, 2021 18:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
              // document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let section5 = document.getElementById("section5"),
                countdown = document.getElementById('countdown'),
                cdtitle = document.getElementById('cdtitle');

                cdtitle.innerText = 'Welcome!'
                setTimeout(function(){

                  cdtitle.style.opacity = "0"
                }, 1000); 
                countdown.style.display = 'none'
                setTimeout(function(){
                  window.scrollTo(0,0);
                  section5.style.opacity = "0"
                }, 2000); 
                setTimeout(function(){
                  section5.style.display = "none"
                }, 3000); 

            // section5.style.display = "none";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());