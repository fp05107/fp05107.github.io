var tabLinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){

    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    
}


// -------------------responsiveness----------------
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


let nav = document.querySelector("nav");
window.addEventListener("scroll", function(){
    nav.classList.toggle("sticky", this.window.scrollY>0); 
 })
 

 var typed = new Typed(".auto-type", {
    strings: ["Java Backend Developer.","Problem Solver." ],
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

 

 