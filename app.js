// Page Load
function pageLoadBodyEffect() {
    document.querySelector("body").style.opacity = 1;
    document.querySelector("body").style.transform = "translate(0,0)";
}
window.onload = pageLoadBodyEffect;

// IMG Pre-Loading
var preload = new Array();

preload[0] = "./imgs/andy.png";
preload[1] = "./imgs/andy2.png";
preload[2] = "./imgs/andy3.png";
preload[3] = "./imgs/andy4.png";

var loadedimages = new Array();
for(var i=0; i<preload.length; i++) {
loadedimages[i] = new Image();
loadedimages[i].src = preload[i];
}

// About Image
const aboutImgList = [
    "./imgs/andy.png", 
    "./imgs/andy2.png", 
    "./imgs/andy3.png",
    "./imgs/andy4.png",
]
const aboutImg = document.getElementById('about-img');
var currentImg = 0;

setInterval(function(){
    currentImg += 1;
    console.log(currentImg);
    if (currentImg > aboutImgList.length - 1) {
        currentImg = 0;
    }
    aboutImg.style.backgroundImage = "url('" + aboutImgList[currentImg] + "')";
},4000)

// Project Gallery
// GIFS, HEADINGS, DESCRIPTIONS, LINKS
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const projectGallery = document.getElementById('project-gallery');
const projectHeading = document.getElementById('projectHeading');
const projectInfo = document.getElementById('projectInfo');
const projectLink = document.getElementById('projectLink');
const projectLink2 = document.getElementById('projectLink2');

const projects = [
  // RESPONSIVE PAGE
    'response.gif',
  // FIN GALLERY
    'fin.gif',
  // FIRST CHOICE NON-MED
    'firstchoice.gif',
  // PET PROJECT ANIMAL ADOPTION
    'animal.gif', 
  // CANADA QUIZ
    'quiz.gif', 
  // CALGARY SNOWSPORTS
    'snow.gif', 
  // KAIZEN AUTOMOTIVE
    'kaizen.gif', 
  // MINDWELL-U
    'MWU.gif', 
  // BREAKING BAD QUOTES
    'quotes.gif', 
  // INSTAGRAM PAGE
    'insta.gif',
  // LYRIC GENERATOR
    'lyrics.gif'
]; 
const heading = [
  // RESPONSIVE PAGE
    'Responsively Changing Page',
  // FIN GALLERY
    'Fin Gallery',
  // FIRST CHOICE NON-MED
    'First Choice Non-Medical Home Care',
  // PET PROJECT ANIMAL ADOPTION
    'Animal Adoption Page', 
  // CANADA QUIZ 
    'Canada Quiz', 
  // CALGARY SNOWSPORTS
    'Fictional Winter Sporting Good Business', 
  // KAIZEN AUTOMOTIVE   
    'Kaizen Automotive Landing Page Re-Design', 
  // MINDWELL-U    
    'MindWell-U Landing Re-Design', 
  // BREAKING BAD QUOTES 
    'Breaking Bad Quote Generator', 
  // INSTAGRAM PAGE
    'Instagram Desktop Replica Using PHP', 
  // LYRIC GENERATOR
    'Song Lyric Generator'
];
const description = [
  // RESPONSIVE PAGE
    'A site that completely changes at different width resizes',
  // FIN GALLERY
    'A site made for a local aquatic pet store using WordPress, done during an internship with Simple Simple Advertising',
  // FIRST CHOICE NON-MED
    'A website designed and devleoped by me. Coded from scratch using HTML, CSS, and Javascipt. Done for a local client who owns a personal home care business',
  // PET PROJECT ANIMAL ADOPTION
    'A responsive site made about a fictional animal adoption company.',
  // CANADA QUIZ 
    'A 5 question triva quiz about Canada. Gives you a percentage score at the end.', 
  // CALGARY SNOWSPORTS
    'A site that was made using WordPress and WooCommerce plug-in. Based on a fictional local business that sells snowboard and ski equipment', 
  // KAIZEN AUTOMOTIVE    
    'A landing page re-design of a Calgary company called Kaizen Automotive. Modified car colors in Photoshop. Able to choose the cars color using JavaScript loop',
  // MINDWELL-U
    'Responsive website re-design for a Vancouver based company.',
  // BREAKING BAD QUOTES 
    'A page that cycles through several Breaking Bad quotes.',
  // INSTAGRAM PAGE 
    'A remake of the desktop version of Instagram. HTML and CSS was coded from scratch, PHP was coded with Laravel framework. Each user generated with migrations and has 5 posts. Users can also register an account and select custom handle and avatar', 
  // LYRIC GENERATOR
    'Can type in a song and artist to return the lyrics of the requested song. Song must be in Lyrics.ovh API in order to be succesfull'
];
const link = [
  // RESPONSIVE PAGE
    'https://andysresponsivepagedesign-crzukxapxa.now.sh/#',
  // FIN GALLERY
    'https://fin-gallery.ca/',
  // FIRST CHOICE NON-MED
    'https://www.firstchoicehomecare.ca',
  // PET PROJECT ANIMAL ADOPTION
    'https://andy-aylward-cpnt-assignment-4-fpswjrnnoq.now.sh', 
  // CANADA QUIZ
    'https://canada-quiz-page-zvigvenqga.now.sh', 
  // CALGARY SNOWSPORTS
    'http://35.247.63.134/',
  // KAIZEN AUTOMOTIVE 
    'https://kaizen-automotive-wvulowodqa.now.sh/', 
  // MINDWELL-U
    'https://andyaylward-mindwelluexercise2-htondefrpz.now.sh', 
  // BREAKING BAD QUOTES  
    'https://breaking-bad-quote-machine-rifdvzhegq.now.sh', 
  // INSTAGRAM PAGE  
    'http://52.87.237.138/', 
  // LYRIC GENERATOR 
    'https://lyric-finder-izoozjfhzo.now.sh/'
];

var currentProject = 0;

projectGallery.style.backgroundImage = "url('./imgs/" + projects[currentProject] + "')";
projectHeading.innerHTML = heading[currentProject];
projectInfo.innerHTML = description[currentProject];
projectLink.href = link[currentProject];

next.addEventListener('click', function(){
    currentProject += 1;

    if (currentProject > projects.length - 1) {
        currentProject = 0;
    }

    projectGallery.style.backgroundImage = "url('./imgs/" + projects[currentProject] + "')";
    projectHeading.innerHTML = heading[currentProject];
    projectInfo.innerHTML = description[currentProject];
    projectLink.href = link[currentProject];
    projectLink2.href = link[currentProject];
})

previous.addEventListener('click', function(){
    currentProject -= 1;
    
    if (currentProject < 0) {
        currentProject = projects.length - 1;
    }

    projectGallery.style.backgroundImage = "url('./imgs/" + projects[currentProject] + "')";
    projectHeading.innerHTML = heading[currentProject];
    projectInfo.innerHTML = description[currentProject];
    projectLink.href = link[currentProject];
    projectLink2.href = link[currentProject];
})

// Technical Skills Icons

const htmlLogo = document.getElementById('htmlLogo');
const psLogo = document.getElementById('psLogo');
const cssLogo = document.getElementById('cssLogo');
const jsLogo = document.getElementById('jsLogo');
const drupalLogo = document.getElementById('drupalLogo');
const phpLogo = document.getElementById('phpLogo');
const bsLogo = document.getElementById('bsLogo');
const techContent = document.getElementById('techContent');

htmlLogo.addEventListener('click', function(){
    techContent.style.opacity = '0';

    setTimeout(function(){
        techContent.innerHTML = 'HTML 5';
        techContent.style.opacity = '1';
    }, 200)
})

psLogo.addEventListener('click', function(){
    techContent.style.opacity = '0';

    setTimeout(function(){
        techContent.innerHTML = 'Adobe Photoshop';
        techContent.style.opacity = '1';
    }, 200)
})

jsLogo.addEventListener('click', function(){
    techContent.style.opacity = '0';

    setTimeout(function(){
        techContent.innerHTML = 'JavaScript + jQuery';
        techContent.style.opacity = '1';
    }, 200)
})

wpLogo.addEventListener('click', function(){
    techContent.style.opacity = '0';

    setTimeout(function(){
        techContent.innerHTML = 'WordPress';
        techContent.style.opacity = '1';
    }, 200)
})

drupalLogo.addEventListener('click', function(){
    techContent.style.opacity = '0';

    setTimeout(function(){
        techContent.innerHTML = 'Drupal 7 / 8';
        techContent.style.opacity = '1';
    }, 200)
})

cssLogo.addEventListener('click', function(){
    techContent.style.opacity = '0';

    setTimeout(function(){
        techContent.innerHTML = 'CSS 3 + SASS';
        techContent.style.opacity = '1';
    }, 200)
})

phpLogo.addEventListener('click', function(){
    techContent.style.opacity = '0';

    setTimeout(function(){
        techContent.innerHTML = 'PHP';
        techContent.style.opacity = '1';
    }, 200)
})

bsLogo.addEventListener('click', function(){
    techContent.style.opacity = '0';

    setTimeout(function(){
        techContent.innerHTML = 'Bootstrap';
        techContent.style.opacity = '1';
    }, 200)
})
