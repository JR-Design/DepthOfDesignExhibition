// These 4 series of functions display the page based on which function is called
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");
var step5 = document.getElementById("step5");


step1.style.display = 'grid';
step2.style.display = 'none';
step3.style.display = 'none';
step4.style.display = 'none';
step5.style.display = 'none';


function nextPage1() {
    step1.style.display = 'none';
    step2.style.display = 'grid';
}
function backPage1() {
    step1.style.display = 'grid';
    step2.style.display = 'none';
}

function nextPage2() {
    step2.style.display = 'none';
    step3.style.display = 'grid';
}
function backPage2() {
    step1.style.display = 'none';
    step2.style.display = 'grid';
    step3.style.display = 'none';
}

function nextPage3() {
    step3.style.display = 'none';
    step4.style.display = 'grid';
    
}
function backPage3() {
    step3.style.display = 'grid';
    step4.style.display = 'none';
}


//Delay was pushed to lower function titled "submitForm()" ------ I commented it out incase we have to revert
/*
function nextPage4() {
        setTimeout(function(){

        step4.style.display = 'none';
        step5.style.display = 'grid';
    },2000);
};
*/

function nextPage4() {
    step4.style.display = 'none';
    step5.style.display = 'grid';
};

function backPage4() {
    step4.style.display = 'grid';
    step5.style.display = 'none';
}


//JAVASCRIPT FOR TO DELAY SUBMISSION




/*
    // Add the novalidate attribute when the JS loads
    var forms = document.querySelectorAll('.validate');
    for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true);
    };
*/

function submitForm() {


    nextPage4();

    setTimeout(function(){
        document.getElementById("mc-embedded-subscribe-form").submit()
    },2500);
    
   
}




document.getElementById('mc-embedded-subscribe').onclick = function() {
    setTimeout(submitForm, 2000); 
    
}


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



//JAVASCRIPT FOR CONFIRM BUTTON ################################

gsap.registerPlugin(Physics2DPlugin);

document.querySelectorAll('.button').forEach(button => {

    const bounding = button.getBoundingClientRect();

    button.addEventListener('mousemove', e => {

        let dy = (e.clientY - bounding.top - bounding.height / 2) / -1;
        let dx = (e.clientX - bounding.left - bounding.width / 2)  / 10;

        dy = dy > 10 ? 10 : (dy < -10 ? -10 : dy);
        dx = dx > 4 ? 4 : (dx < -4 ? -4 : dx);

        button.style.setProperty('--rx', dy);
        button.style.setProperty('--ry', dx);

    });

    button.addEventListener('mouseleave', e => {

        button.style.setProperty('--rx', 0);
        button.style.setProperty('--ry', 0);

    });

    button.addEventListener('click', e => {
        button.classList.add('success');
        gsap.to(button, {
            '--icon-x': -3,
            '--icon-y': 3,
            '--z-before': 0,
            duration: .2,
            onComplete() {
                particles(button.querySelector('.emitter'), 100, -4, 6, -80, -50);
                gsap.to(button, {
                    '--icon-x': 0,
                    '--icon-y': 0,
                    '--z-before': -6,
                    duration: 1,
                    ease: 'elastic.out(1, .5)',
                    onComplete() {
                        button.classList.remove('success');
                    }
                });
            }
        });
    });

});

function particles(parent, quantity, x, y, minAngle, maxAngle) {
    let colors = [
        '#FFFF04',
        '#EA4C89',
        '#892AB8',
        '#4AF2FD',
    ];
    for(let i = quantity - 1; i >= 0; i--) {
        let angle = gsap.utils.random(minAngle, maxAngle),
            velocity = gsap.utils.random(70, 140),
            dot = document.createElement('div');
        dot.style.setProperty('--b', colors[Math.floor(gsap.utils.random(0, 4))]);
        parent.appendChild(dot);
        gsap.set(dot, {
            opacity: 0,
            x: x,
            y: y,
            scale: gsap.utils.random(.4, .7)
        });
        gsap.timeline({
            onComplete() {
                dot.remove();
            }
        }).to(dot, {
            duration: .05,
            opacity: 1
        }, 0).to(dot, {
            duration: 1.8,
            rotationX: `-=${gsap.utils.random(720, 1440)}`,
            rotationZ: `+=${gsap.utils.random(720, 1440)}`,
            physics2D: {
                angle: angle,
                velocity: velocity,
                gravity: 120
            }
        }, 0).to(dot, {
            duration: 1,
            opacity: 0
        }, .8);
    }
}


