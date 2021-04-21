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


//HERE WE FUCKING GO TUESDAY APRIL 20TH 10:17 PM LETS PRAY IT GOES THROUGH

function studentAboutUpdate(clicked_id) {

//This reset's the elements on resize 
window.onresize = function() {
    section1_1.style.display = "none";
    section1.style.display = "none";
    section2_1.style.display = "none";
    section2.style.display = "none";
    section3_1.style.display = "none";
    section3.style.display = "none";
    section4_1.style.display = "none";
    section4.style.display = "none";
}

///////DEFAULTS
let windowWidth = window.innerWidth;

//Section Defaults
let section1_1 = document.getElementById('about_1_1');
let section1 = document.getElementById('about_1');
let section2_1 = document.getElementById('about_2_1');
let section2 = document.getElementById('about_2');
let section3_1 = document.getElementById('about_3_1');
let section3 = document.getElementById('about_3');
let section4_1 = document.getElementById('about_4_1');
let section4 = document.getElementById('about_4');

//Name Defaults
let studentName = 'James Ross';
let studentSkills = 'Web Design • Mediocre Backend Dev • Super Spicy Frontend Dev';
let studentAbout = 'James is cool, overall pretty rounded guy. Thinks too much. Has been sitting 12+ hours a day for over 2 years';
let studentLink = 'easyAs123.abc/meAndYouGirl';
let studentFirstName = studentName.split(' ') [0] + '\'s';


    console.log(clicked_id);
    console.log("HELLO");

    if (clicked_id === 'abbie') {
        studentName = 'Abbie Trottier';
        studentSkills = 'Branding • Visual Identity • Layout • Social Media';
        studentAbout = 'Abbie is a Cambrian College student who works as a graphic designer at a marketing agency in Sudbury, Ontario. Her specialties include digital illustration, layout design, marketing, and branding.';
        studentLink = 'easyAs123.abc/meAndYouGirl';
        studentFirstName = studentName.split(' ') [0] + '\'s';

        if (windowWidth <= 860){
            section1_1.style.display = "block"
            section1.style.display = "none";
        } else if (windowWidth > 860){
            section1_1.style.display = "none"
            section1.style.display = "block"
        }


    } else if ( clicked_id === 'alex') {
        studentName = 'Alexandre Venne'
        studentSkills = 'Branding • Visual Identity • Advertising • Photography • Editorial';
        studentAbout = 'Up and coming graphic designer with a uniquely scientific mind. Driven with an insatiable curiosity to learn more, he is constantly looking for projects that lye beyond his comfort zone.';
        studentLink = 'easyAs123.abc/meAndYouGirl';
        studentFirstName = studentName.split(' ') [0] + '\'s';

        if (windowWidth <= 860){
            section1_1.style.display = "block";
            section1.style.display = "none";
        } else if (windowWidth > 860){
            section1_1.style.display = "none";
            section1.style.display = "block";
        }
    } else if ( clicked_id === 'connor') {
        studentName = 'Connor Paradis'
        studentSkills = 'Branding • Visual Identity • Advertising • Photography • Editorial';
        studentAbout = 'Connor is an aspiring adventurer dedicated to traveling the world all whilst doing his best to make a positive impact through photography and design.';
        studentLink = 'easyAs123.abc/meAndYouGirl';
        studentFirstName = studentName.split(' ') [0] + '\'s';
        
        section1_1.style.display = "none";
        section1.style.display = "block";

    } else if ( clicked_id === 'emily') {
        studentName = 'Emily Anderson'
        studentSkills = 'Illustration • Illustration • Photography • Editorial';
        studentAbout = 'Emily has acquired a higher interest in advertising and illustration while also looking to further her skills in motion graphics. She has developed a delicate, minimalistic style that she showcases throughout her work.';
        studentLink = 'easyAs123.abc/meAndYouGirl';
        studentFirstName = studentName.split(' ') [0] + '\'s';
        
        section1_1.style.display = "none";
        section1.style.display = "block";

    };



let studentNameArea = document.getElementsByClassName('studentName');
for(let i = 0; i < studentNameArea.length; i++) {
    studentNameArea[i].innerHTML = studentName;
}

let studentSkillsArea = document.getElementsByClassName('studentSkills');
for(let i = 0; i < studentSkillsArea.length; i++) {
    studentSkillsArea[i].innerHTML = studentSkills;
}

let studentAboutArea = document.getElementsByClassName('studentAbout');
for(let i = 0; i < studentAboutArea.length; i++) {
    studentAboutArea[i].innerHTML = studentAbout;
}

let studentLinkArea = document.getElementsByClassName('studentLink');
for(let i = 0; i < studentLinkArea.length; i++) {
    studentLinkArea[i].href = studentLink;
}

let studentFirstNameArea = document.getElementsByClassName('studentFirstName');
for(let i = 0; i < studentFirstNameArea.length; i++) {
    studentFirstNameArea[i].innerHTML = studentFirstName;
}

}
/*
studentNameArea.innerText = studentName;
studentSkillsArea.innerText = studentSkills;
studentAboutArea.innerText = studentAbout;
studentLinkArea.href = studentLink;
studentFirstNameArea.innerText = studentFirstName; 

console.log(studentAboutArea, studentNameArea, studentSkillsArea, studentNameArea, studentLinkArea, studentFirstNameArea);
*/