// Page Load
function pageLoadBodyEffect() {
    document.querySelector("body").style.opacity = 1;
    document.querySelector("body").style.transform = "translate(0,0)";
}
window.onload = pageLoadBodyEffect;

// About Image
const aboutImgList = [
    "https://i.imgur.com/BKeZCFQ.png", 
    "https://i.imgur.com/tlXNcmU.png", 
    "https://i.imgur.com/K9J5qE9.png",
    "https://i.imgur.com/PhpFJhs.jpg",
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
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const projectGallery = document.getElementById('project-gallery');
const projectHeading = document.getElementById('projectHeading');
const projectInfo = document.getElementById('projectInfo');
const projectLink = document.getElementById('projectLink');

const projects = [
    'response.gif',
    'animal.gif', 
    'quiz.gif', 
    'snow.gif', 
    'kaizen.gif', 
    'MWU.gif', 
    'quotes.gif', 
    'insta.gif',
    'lyrics.gif'
]; 
const heading = [
    'Responsively Changing Page',
    'Animal Adoption Page', 
    'Canada Quiz', 
    'Fictional Winter Sporting Good Business', 
    'Kaizen Automotive Landing Page Re-Design', 
    'MindWell-U Landing Re-Design', 
    'Breaking Bad Quote Generator', 
    'Instagram Desktop Replica Using PHP', 
    'Song Lyric Generator'
];
const description = [
    'A site that completely changes at different width resizes',
    'A responsive site made about a fictional animal adoption company.',
    'A 5 question triva quiz about Canada. Gives you a percentage score at the end.', 
    'A site that was made using WordPress and WooCommerce plug-in. Based on a fictional local business that sells snowboard and ski equipment', 
    'A landing page re-design of a Calgary company called Kaizen Automotive. Modified car colors in Photoshop. Able to choose the cars color using JavaScript loop',
    'Responsive website re-design for a Vancouver based company.',
    'A page that cycles through several Breaking Bad quotes.',
    'A remake of the desktop version of Instagram. HTML and CSS was coded from scratch, PHP was coded with Laravel framework. Each user generated with migrations and has 5 posts. Users can also register an account and select custom handle and avatar', 
    'Can type in a song and artist to return the lyrics of the requested song. Song must be in Lyrics.ovh API in order to be succesfull'
];
const link = [
    'https://andysresponsivepagedesign-crzukxapxa.now.sh/#',
    'https://andy-aylward-cpnt-assignment-4-fpswjrnnoq.now.sh', 
    'https://canada-quiz-page-zvigvenqga.now.sh', 
    'http://35.247.63.134/',
    'https://kaizen-automotive-wvulowodqa.now.sh/', 
    'https://andyaylward-mindwelluexercise2-htondefrpz.now.sh', 
    'https://breaking-bad-quote-machine-rifdvzhegq.now.sh', 
    'http://52.87.237.138/', 
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
})

// Technical Skills Icons

const htmlLogo = document.getElementById('htmlLogo');
const psLogo = document.getElementById('psLogo');
const cssLogo = document.getElementById('cssLogo');
const jsLogo = document.getElementById('jsLogo');
const jqLogo = document.getElementById('jqLogo');
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
        techContent.innerHTML = 'JavaScript';
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

jqLogo.addEventListener('click', function(){
    techContent.style.opacity = '0';

    setTimeout(function(){
        techContent.innerHTML = 'jQuery';
        techContent.style.opacity = '1';
    }, 200)
})

cssLogo.addEventListener('click', function(){
    techContent.style.opacity = '0';

    setTimeout(function(){
        techContent.innerHTML = 'CSS 3';
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
