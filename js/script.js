//working on mobile!
function WorkingOnItAlert() {
  alert("SORRY BUT THIS SECTION IS NOT READY!");
}

// function onload 
window.addEventListener("load", (event) => {
  ScrollFooterBackgroundAnimation();
  document.getElementById('pageContainerIds').style = "overflow:none;";
  document.getElementById('preloader').style.display = "none";
  //onload scroll me top
  
  //reload page
  if ('performance' in window) {
    const navigationLastEntry = performance.getEntriesByType('navigation').pop();
    if (navigationLastEntry
        && navigationLastEntry.type === 'back_forward'
        && navigationLastEntry.unloadEventStart === 0) {
      window.location.reload(true);
      window.scroll(0,findPosition(document.getElementById("Home-Call")));
    }
  }
  });



//watch preloader
// function FunctionTiming() {
//   return new Promise((resolve, reject) => {
//     let y = 0
//     setTimeout(() => {
//       for (i = 0; i < 2; i++) {
//         y++
//       }
//       document.getElementById('pageContainerIds').style = "overflow:none;";
//       document.getElementById('preloader').style.display = "none";
//       resolve(y)
//     }, 2000)
//   })
// }


// async function secondFunctionTiming() {
//   const result = await FunctionTiming()
// };

// secondFunctionTiming()


//loading page element on scroll

window.addEventListener('scroll', reveal);

function reveal() {
  let reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 80;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}


//slider: portfolio
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("Slider-Portfolio");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
}


//scroll navbar
function scrollHomeDiv() {
  window.scroll(0,
    findPosition(document.getElementById("Home-Call")));
}
function scrollSkillsDiv() {
  window.scroll(0,
    findPosition(document.getElementById("Skills-Call")));
}
function scrollAboutMeDiv() {
  window.scroll(0,
    findPosition(document.getElementById("About-me-Call")));
}
function scrollPortfolioDiv() {
  window.scroll(0,
    findPosition(document.getElementById("Portfolio-Call")));
}
function scrollContactDiv() {
  window.scroll(0,
    findPosition(document.getElementById("Contact-Call")));
}
function scrollContactDiv() {
  window.scroll(0,
    findPosition(document.getElementById("Lets-talk-Call")));
}

function findPosition(obj) {
  let currenttop = 0;
  if (obj.offsetParent) {
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [currenttop];
  }
}



//contact mail
function sendMail() {
  let link = "mailto:jakubolszewski1996@outlook.com";
  window.location.href = link;
}




//animation on header by loading png sequence on mouse move
function AnimHeader() {
  //collect mouse information
  window.addEventListener("mousemove", (e) => {
    let xPos = e.clientX / 38.4;
    if (xPos > 50) {
      xPos = 50;
    }
    let x = document.getElementById("Home-Call");
    let stylestoChange = '/images/Home/HomeImage-';
    let numericToAnimate = xPos.toFixed(0) + '.png';
    x.style = 'background-image:url(' + stylestoChange + numericToAnimate + '), linear-gradient(0.5turn, #C0D9F8, #C0D9F8, #E0EFFA);';
  });
}


//animation on footer by loading png sequence base on scroll
function ScrollFooterBackgroundAnimation() {

  let sciezka = '/images/contact/contactSequence/';
  let latestKnownScrollY = 0,

    ticking = false,
    item = document.querySelectorAll('.Lets-talk-sec');



  function update() {
    // reset the tick so we can
    // capture the next onScroll
    //browserZoomLevel >= 150
    ticking = false;
    let browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    let variabletoAnimateScroll = (latestKnownScrollY).toFixed(0);
    let body = document.body, html = document.documentElement;
    let variableInfoPageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    let VariableToAnimateBasedOnHeight = ((variabletoAnimateScroll / variableInfoPageHeight.toFixed(0) * 100).toFixed(0));
    let VariableToAnimateBasedOnHeightTimeTwo = (((variabletoAnimateScroll) * 3 / variableInfoPageHeight.toFixed(0) * 100).toFixed(0));
    // console.log(window.pageYOffset);

    //if page scrolled execute
    if (VariableToAnimateBasedOnHeight < 75 && browserZoomLevel > 90 && browserZoomLevel < 150) {
      item[0].style = 'background-image:url(' + sciezka + 'frame_1.png),linear-gradient(0.5turn, #FAFAFC, #F1F0F7, #ffffff);';


    }
    else if (VariableToAnimateBasedOnHeight > 76 && browserZoomLevel > 90 && browserZoomLevel < 150) {

      item[0].style = 'background-image:url(' + sciezka + 'frame_' + ((VariableToAnimateBasedOnHeightTimeTwo - 225)).toFixed(0) + '.png),linear-gradient(0.5turn, #FAFAFC, #F1F0F7, #ffffff);';
    }
    else {
      item[0].style = 'background-image:url(' + sciezka + 'frame_34.png),linear-gradient(0.5turn, #FAFAFC, #F1F0F7, #ffffff);';

    }
  }

  function onScroll() {
    latestKnownScrollY = window.scrollY; //No IE8
    requestTick();
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update);
    }
    ticking = true;
  }

  window.addEventListener('scroll', onScroll, false);


}






