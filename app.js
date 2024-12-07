const navMenu = document.querySelector('.navmenu');
const navLinks = navMenu.querySelectorAll('a');
const closebtn = document.querySelector('.clsoebtn');

contentProtection = document.querySelector('.contentProtection'); 
const contentProtectionBtn = document.getElementById('contentProtectionBtn') 
document.body.addEventListener('contextmenu', (e)=>{ 
  e.preventDefault(); 
  contentProtection.classList.add('contentProtection-active'); 
  
  contentProtectionBtn.addEventListener('click', ()=>{ 
  contentProtection.classList.remove('contentProtection-active') 
}) 
})

const currentYear = new Date().getFullYear().toString().slice(-2);
document.getElementById('current-year').textContent = currentYear;

const darkmode = document.querySelector('.darkmode');
const svg1 = `
    <svg class="line svg-1" viewBox="0 0 24 24" fill = "#101010">
        <path d="M183.72453,170.371a10.4306,10.4306,0,0,1-.8987,3.793,11.19849,11.19849,0,0,1-5.73738,5.72881,10.43255,10.43255,0,0,1-3.77582.89138,1.99388,1.99388,0,0,0-1.52447,3.18176,10.82936,10.82936,0,1,0,15.118-15.11819A1.99364,1.99364,0,0,0,183.72453,170.371Z" transform="translate(-169.3959 -166.45548)"></path>
    </svg>`;

const svg2 = `
    <svg class="svg-2" viewBox="0 0 24 24" fill = "orange">
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="3" r="1"></circle>
        <circle cx="12" cy="21" r="1"></circle>
        <circle cx="21" cy="12" r="1"></circle>
        <circle cx="3" cy="12" r="1"></circle>
        <circle cx="5.5" cy="5.5" r="1"></circle>
        <circle cx="18.5" cy="18.5" r="1"></circle>
        <circle cx="18.5" cy="5.5" r="1"></circle>
        <circle cx="5.5" cy="18.5" r="1"></circle>
    </svg>`;

let isDarkMode = false;

darkmode.addEventListener('click', () => {

    isDarkMode = !isDarkMode; 

    if (isDarkMode) {
        darkmode.innerHTML = svg2;
        darkmode.style.color = "orange"
        darkmode.classList.remove('darmode')
        darkmode.classList.add('lightmode')
    } else {
        darkmode.innerHTML = svg1; 
        darkmode.style.color = `var(--text-color)`
        darkmode.classList.add('darmode')
        darkmode.classList.remove('lightmode')
    }
    document.body.classList.toggle('dark-Mode');
});

navLinks.forEach(navLinks =>{
  navLinks.addEventListener('click', ()=>{
    document.querySelector('.active')?.classList.remove('active')
    navLinks.classList.add('active')
  })
})
function togglebtn() {
        navMenu.classList.add('navmenu-show');
      }

      closebtn.addEventListener('click', 
      ()=>{
        navMenu.classList.remove('navmenu-show');
      })
      
navLinks.forEach((link) => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('navmenu-show');
        });
      });

var typed = new Typed('#animee', {
        strings: ['Web Developer', 'Coursera Certified', 'Digital Creator', 'Blogger','Computer Engineer','Cybersecurity Engineer',],
        typeSpeed: 80,
        loop: true,
      });
        AOS.init({
            offset: 100,
            duration: 500,
          });


          const backTotop = document.querySelector('.backTotop');
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 130) {
    backTotop.style.display = "block";
  } else {
    backTotop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
