var tabLinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var resume = document.getElementById("resume");
resume.addEventListener('click',function(){
    window.open("https://drive.google.com/file/d/1AOHf46vMzZFKLEHMTg1d9dF4BrnIjwyN/view?usp=sharing")
})

//Project Section//
let olx_git = document.getElementById("olx_git");
let olx_live = document.getElementById("olx_live");

olx_git.addEventListener('click',function(){
    window.open("https://github.com/tarique076/OLX_Clone")
})
olx_live.addEventListener('click',function(){
    window.open("https://voluble-bombolone-fdb49d.netlify.app/")
})


let dermstore_git = document.getElementById("dermstore_git");
let dermstore_live = document.getElementById("dermstore_live");

dermstore_git.addEventListener('click',function(){
    window.open("https://github.com/fp05107/Dermstore_clone")
})
dermstore_live.addEventListener('click',function(){
    window.open("https://extraordinary-sunburst-4c6b00.netlify.app")
})

let bus_git = document.getElementById("bus_git");
let bus_video = document.getElementById("bus_video");

bus_git.addEventListener('click',function(){
    window.open("https://github.com/fp05107/long-dinner-956")
})
bus_video.addEventListener('click',function(){
    window.open("https://drive.google.com/file/d/1snpKcv4vYFDvXvgmWf-AfCJPkAyY_xFy/view?usp=share_link")
})

let auction_git = document.getElementById("auction_git");
let auction_video = document.getElementById("auction_video");

auction_git.addEventListener('click',function(){
    window.open("https://github.com/fp05107/Automated_Auction_System")
})
auction_video.addEventListener('click',function(){
    window.open("https://drive.google.com/file/d/1bkpx7RgiOFbGZu23wwQDbP66Qgciu3BL/view?usp=sharing")
})













//Project Section End


function opentab(tabname) {

    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}


// -------------------responsiveness----------------
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}


let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
    nav.classList.toggle("sticky", this.window.scrollY > 0);
})


var typed = new Typed(".auto-type", {
    strings: ["Java Backend Developer.", "Problem Solver."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

let username = "fp05107";
GitHubCalendar(".calendar", "fp05107", { responsive: true });
// Use a proxy
//   GitHubCalendar(".calendar", "fp05107", {
//     proxy (username) {
//       return fetch(`https://your-proxy.com/github?user=fp05107`)
//     }
//  }).then(r => r.text());




const scriptURL = 'https://script.google.com/macros/s/AKfycbyCu2MXTeTSpjuYIuS-h6mLPuyPQCx4LfJSugIA5TnwfdYjLhFfRehEtsBel5N46g1t/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML="Message sent Successfully"
        setTimeout(function(){
            msg.innerHTML="";
        },3000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})