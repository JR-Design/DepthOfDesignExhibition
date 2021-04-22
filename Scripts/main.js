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

    var items2 = document.querySelectorAll('.student_card');
    for(let i = 0; i < items2.length; i++) {
        items2[i].style.opacity = '100%';
        console.log(i);
    }    
    activeStudent = document.getElementById("activeStudent").removeAttribute('id');

}

function resetStudentAbout() {
    section1_1.style.display = "none";
    section1.style.display = "none";
    section2_1.style.display = "none";
    section2.style.display = "none";
    section3_1.style.display = "none";
    section3.style.display = "none";
    section4_1.style.display = "none";
    section4.style.display = "none";
    

    var items2 = document.querySelectorAll('.student_card');
    for(let i = 0; i < items2.length; i++) {
        items2[i].style.opacity = '100%';
        console.log(i);
    }

    activeStudent2 = document.getElementById("activeStudent");

    if(activeStudent2 !== null) {    
    activeStudent2 = activeStudent2.removeAttribute('id');
    }
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
let activeStudentSection = document.getElementById('activeStudent');
var items = document.querySelectorAll('.student_card:not(#activeStudent)');


//Name Defaults
let studentName = 'You broke the code';
let studentSkills = 'Sorry I don\'t mean to blame the end user';
let studentAbout = 'Please contact James and let him know';
let studentLink = 'easyAs123.abc/meAndYouGirl';
let studentFirstName = studentName.split(' ') [0] + '\'s';
let activeStudent = clicked_id.parentElement;


//Due to time restraints + readability concerns I'm gonna leave this as a large if Else statement
//Basically it updates the area 
    if (clicked_id.id === 'melanie') {
        studentName = 'Melanie Gagne';
        studentSkills = 'Branding • Packaging • Typography • Illustration';
        studentAbout = 'Melanie is an interdisciplinary creative who is constantly exploring new mediums, both tangible and digital. As a designer, she heavily focuses on the research and exploration portion of any project, emphasizing meaning and creating more profound values for every design.';
        studentLink = './students/melaniegagne/gagne.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';


        resetStudentAbout();
        console.log("1");

        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        console.log("2");
        if (windowWidth <= 860){
            section1_1.style.display = "block"
        } else if (windowWidth > 860){
            section1.style.display = "block"
        }


    } else if ( clicked_id.id === 'james') {
       
       
        studentName = 'James Ross'
        studentSkills = 'Web Development • UI/UX • Packaging • Motion Graphics';
        studentAbout = 'Throughout his time in the program, James has advanced his career while independently learning web development and UI/UX. Having worked in the field while simultaneously finishing his studies, he will continue to pursue full-stack development while going on to hopefully lead a small successful business.  ';
        studentLink = './students/jamesross/ross.html';
        studentFirstName = studentName.split(' ') [0] + '\'';

        
        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");

        if (windowWidth <= 860){
            section1_1.style.display = "block";
        } else if (windowWidth > 860){
            section1.style.display = "block";
        }
    } else if ( clicked_id.id === 'jasmine') {
        studentName = 'Jasmine Paquette'
        studentSkills = 'Branding • Visual Identity • Packaging';
        studentAbout = 'Jasmine is a dynamic graphic designer in the making after having studied its many sectors at Cambrian College. Over the past three years, she has developed a fondness for anything branding, illustration and layout. She believes there is a unique approach to each problem, and nothing is ever too far out of the box because outside of the box is where design belongs.';
        studentLink = './students/jasminepaquette/paquette.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';
        
        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        section1.style.display = "block";

    } else if ( clicked_id.id === 'matt') {
        studentName = 'Matthew Bacon'
        studentSkills = 'Web Development • UI/UX • Motion Graphics';
        studentAbout = 'Matthew likes to direct his design efforts towards web design with a second passion for videography. He excels at minimalism and gets the most across by using the least amount of content needed to avoid bombarding the viewer. He\'d like to pursue web design after graduation as a freelancer as he continues to develop his knowledge in UI/UX and expanding his list of languages.';
        studentLink = './students/matthewbacon/bacon.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';
        
        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        section1.style.display = "block";
        //END OF SECTION 1 STUDENT CARDS
        
    }  else if ( clicked_id.id === 'connor') {
        //START OF SECTION 2 STUDENT CARDS
        studentName = 'Connor Paradis'
        studentSkills = 'Branding • Visual Identity • Advertising • Photography • Editorial';
        studentAbout = 'Connor is an aspiring adventurer dedicated to traveling the world all whilst doing his best to make a positive impact through photography and design.';
        studentLink = './students/connorparadis/paradis.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';

        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        if (windowWidth <= 860){
            section2_1.style.display = "block"
        } else if (windowWidth > 860){
            section2.style.display = "block"
        }

    } else if ( clicked_id.id === 'hunter') {
        studentName = 'Hunter Maticiw'
        studentSkills = 'Packaging • Advertising • Illustration';
        studentAbout = 'Hunter is an illustration based designer that likes to brings his creative style to every project possible. His time in the graphic design program has cultivated his appreciation for creative learning, which he would like to continue after graduation with 3D modelling and animation.';
        studentLink = './students/huntermaticiw/maticiw.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';

        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        if (windowWidth <= 860){
            section2_1.style.display = "block";
        } else if (windowWidth > 860){
            section2.style.display = "block";
        }
    }  else if ( clicked_id.id === 'miranda') {
        studentName = 'Miranda Jarvis'
        studentSkills = 'Illustration • Editorial • Product • Branding';
        studentAbout = 'Miranda enjoys taking an unconventional approach to design. She isn’t afraid to step away from the computer to try solving design problems through any medium available.';
        studentLink = './students/mirandajarvis/jarvis.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';
        
        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        section2.style.display = "block";

    } else if ( clicked_id.id === 'alex') {
        studentName = 'Alexandre Venne'
        studentSkills = 'Branding • Visual Identity • Advertising • Photography • Editorial';
        studentAbout = 'Up and coming graphic designer with a uniquely scientific mind. Driven with an insatiable curiosity to learn more, he is constantly looking for projects that lye beyond his comfort zone.';
        studentLink = './students/alexandrevenne/venne.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';
        
        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        section2.style.display = "block";
        //END OF SECTION 2 STUDENT CARDS
    } else if ( clicked_id.id === 'jasmineM') {
        //START OF SECTION 3 STUDENT CARDS
        studentName = 'Jasmine Morin'
        studentSkills = 'Visual Identity • Illustration • Packaging • Print';
        studentAbout = 'Jasmine comes from a visual arts background and has pushed it further by using her skills towards graphic design at Cambrian College. She is always working on the next project whether that be painting or design.';
        studentLink = './students/jasminemorin/morin.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';
        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        if (windowWidth <= 860){
            section3_1.style.display = "block"
        } else if (windowWidth > 860){
            section3.style.display = "block"
        }

    } else if ( clicked_id.id === 'kasey') {
        studentName = 'Kasey Pulvermacher'
        studentSkills = 'Illustration • Branding • Print';
        studentAbout = 'Kasey only started learning about what graphic design was when they first came to Cambrian, the course was able to teach them how to bring their illustration work, with many different aspects of design.';
        studentLink = './students/kaseypulvermacher/pulvermacher.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';
        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        if (windowWidth <= 860){
            section3_1.style.display = "block";
        } else if (windowWidth > 860){
            section3.style.display = "block";
        }
    }  else if ( clicked_id.id === 'madison') {
        studentName = 'Madison Lemieux'
        studentSkills = 'Branding • Visual Identity • UI/UX Design • Social Good';
        studentAbout = 'Madison is one of those designers that can’t help but put their interests into every project. Any chance she gets she will include vibrant colours and expressive typography. Of course, she also makes sure to fit the tone as she enjoys tackling many serious social issues in her projects.';
        studentLink = './students/madisonlemieux/lemieux.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';
        
        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        section3.style.display = "block";

    } else if (clicked_id.id === 'abbie') {
        studentName = 'Abbie Trottier';
        studentSkills = 'Branding • Visual Identity • Layout • Social Media';
        studentAbout = 'Abbie is a Cambrian College student who works as a graphic designer at a marketing agency in Sudbury, Ontario. Her specialties include digital illustration, layout design, marketing, and branding.';
        studentLink = './students/abbietrottier/trottier.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';
        
        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        section3.style.display = "block";
        //END OF SECTION 3 STUDENT CARDS
    } else if ( clicked_id.id === 'emily') {
        //START OF SECTION 4 STUDENT CARDS
        studentName = 'Emily Anderson'
        studentSkills = 'Illustration • Illustration • Photography • Editorial';
        studentAbout = 'Emily has acquired a higher interest in advertising and illustration while also looking to further her skills in motion graphics. She has developed a delicate, minimalistic style that she showcases throughout her work.';
        studentLink = './students/emilyanderson/anderson.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';

        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        if (windowWidth <= 860){
            section4_1.style.display = "block"
        } else if (windowWidth > 860){
            section4.style.display = "block"
        }

    } else if ( clicked_id.id === 'heather') {
        studentName = 'Heather Lashuk'
        studentSkills = 'Print • Photography • Editorial • Illustration';
        studentAbout = 'Throughout the three years in the Graphic Design Program at Cambrian, she has learned various skills and what areas of the field she wishes to pursue. She enjoys experimenting with photography and illustration.';
        studentLink = './students/heatherlashuk/lashuk.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';

        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        if (windowWidth <= 860){
            section4_1.style.display = "block";
        } else if (windowWidth > 860){
            section4.style.display = "block";
        }
    }  else if ( clicked_id.id === 'mitu') {
        studentName = 'Mitu Thakkar'
        studentSkills = 'Illustration • Social Good • Typography ';
        studentAbout = 'Mitu has vast knowledge in various aspects of designing, including but not limited to illustration, typography, and motion graphics. Her interest lies in the field of abstract, minimalist, and free-hand illustrations.';
        studentLink = './students/mituthakar/thakar.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';
        
        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        section4.style.display = "block";

    } else if (clicked_id.id === 'montana') {
        studentName = 'Montana Brandow';
        studentSkills = 'Illustration • Print • Packaging • Branding';
        studentAbout = 'Montana enjoys the outdoors and spending time in nature. She loves to incorporate nature into her projects any chance she can get.';
        studentLink = './students/montanabrandow/brandow.html';
        studentFirstName = studentName.split(' ') [0] + '\'s';
        

        resetStudentAbout();
        activeStudent = activeStudent.setAttribute("id", "activeStudent");
        section4.style.display = "block";
        //END OF SECTION 4 STUDENT CARDS
    };

//THIS SECTION UPDATES ALL THE ELEMENTS USING A FOR STATEMENT THAT LOOPS OVER ALL ELEMENTS WITHIN A CLASS

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

var items = document.querySelectorAll('.student_card:not(#activeStudent)');
for(let i = 0; i < items.length; i++) {
    items[i].style.opacity = '70%';
    console.log(i);
}

}




//For Project Section on homepage
var projectElement = document.getElementById("ProjectElement");



function hover(element) {
    if (element === 'abbie_project') {
    projectElement.setAttribute('src', './img/featuredProject/Abbie.png');
    } else if (element === 'alex_project') {
        projectElement.setAttribute('src', './img/featuredProject/alex.png');
    } else if (element === 'connor_project') {
        projectElement.setAttribute('src', './img/featuredProject/connor.png');
    } else if (element === 'emily_project') {
        projectElement.setAttribute('src', './img/featuredProject/emily.png');
    } else if (element === 'heather_project') {
        projectElement.setAttribute('src', './img/featuredProject/heather.png');
    } else if (element === 'hunter_project') {
        projectElement.setAttribute('src', './img/featuredProject/hunter.png');
    } else if (element === 'james_project') {
        projectElement.setAttribute('src', './img/featuredProject/james.png');
    } else if (element === 'jasmineM_project') {
        projectElement.setAttribute('src', './img/featuredProject/jasmineM.png');
    } else if (element === 'jasmine_project') {
        projectElement.setAttribute('src', './img/featuredProject/jasmine.png');
    } else if (element === 'kasey_project') {
        projectElement.setAttribute('src', './img/featuredProject/kasey.png');
    } else if (element === 'madison_project') {
        projectElement.setAttribute('src', './img/featuredProject/madison.png');
    } else if (element === 'matthew_project') {
        projectElement.setAttribute('src', './img/featuredProject/matt.png');
    } else if (element === 'melanie_project') {
        projectElement.setAttribute('src', './img/featuredProject/melanie.png');
    } else if (element === 'miranda_project') {
        projectElement.setAttribute('src', './img/featuredProject/miranda.png');
    } else if (element === 'mitu_project') {
        projectElement.setAttribute('src', './img/featuredProject/mitu.png');
    } else if (element === 'montana_project') {
        projectElement.setAttribute('src', './img/featuredProject/montana.png');
    }

  }
  
  function unhover(element) {
    projectElement.setAttribute('src', '');
  }



/*
studentNameArea.innerText = studentName;
studentSkillsArea.innerText = studentSkills;
studentAboutArea.innerText = studentAbout;
studentLinkArea.href = studentLink;
studentFirstNameArea.innerText = studentFirstName; 

console.log(studentAboutArea, studentNameArea, studentSkillsArea, studentNameArea, studentLinkArea, studentFirstNameArea);
*/