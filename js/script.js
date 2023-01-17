//working on mobile!
function WorkingOnItAlert() {
  alert("SORRY BUT THIS SECTION IS NOT READY!");
}
// function onload
window.addEventListener("load", (event) => {
  ScrollFooterBackgroundAnimation();



  // stop scaling 
  //   console.log('error scaling page!');
  //   element.addEventListener('wheel', event => {
  //   const { ctrlKey } = event

  //   if (ctrlKey) {
  //      event.preventDefault();
  //      return

  //   }
  // }, { passive: false })

});





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
  // if (window.scrollY){

  let sciezka = '/images/contact/contactSequence/';
  let latestKnownScrollY = 0,

    ticking = false,
    item = document.querySelectorAll('.Lets-talk-sec');



  function update() {
    // reset the tick so we can
    // capture the next onScroll
    ticking = false;
    let variabletoAnimateScroll = (latestKnownScrollY).toFixed(0);
    let body = document.body, html = document.documentElement;
    let variableInfoPageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    let VariableToAnimateBasedOnHeight = ((variabletoAnimateScroll / variableInfoPageHeight.toFixed(0) * 100).toFixed(0));
    // console.log(window.pageYOffset);

    //if page scrolled execute
    if (VariableToAnimateBasedOnHeight < 73) {
      item[0].style = 'background-image:url(' + sciezka + 'frame_1.png),linear-gradient(0.5turn, #FAFAFC, #F1F0F7, #ffffff);';


    }
    else if (VariableToAnimateBasedOnHeight > 74) {

      item[0].style = 'background-image:url(' + sciezka + 'frame_' + ((VariableToAnimateBasedOnHeight - 70) * 2).toFixed(0) + '.png),linear-gradient(0.5turn, #FAFAFC, #F1F0F7, #ffffff);    background-position: bottom ' +((VariableToAnimateBasedOnHeight - 85)*-20 ) +'px left 0px;';
      // console.log();
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













//quity working but no

  // let callbacks = [];
  // let scrollPosition = -1;
  // let animatedKilled = false;

  // const animate = () => {

  //   requestAnimationFrame(onScroll);

  // }

  // function onScroll() {
  //   if (animatedKilled) return;

  //   if (scrollPosition !== window.pageYOffset) {
  //     window.removeEventListener('scroll', animate);
  //     scrollPosition = window.pageYOffset;
  //     callbacks.forEach(cb => cb(scrollPosition));
  //     animate();
  //     console.log('work');
  //     document.getElementById("AnimFooterCall").style = "animation-play-state:running;";

  //   } else {
  //     document.getElementById("AnimFooterCall").style = "animation-play-state:reverse;";
  //     document.getElementById("AnimFooterCall").style = "animation-play-state:paused;";
  //     console.log('doesnt');
  //     window.addEventListener('scroll', animate);

  //   }
  // }

  // animate();

  // return {
  //   add: function (cb) {

  //     callbacks = [...callbacks, cb];
  //   },
  //   remove: function (cb) {
  //     callbacks = callbacks.filter(value => value != cb);
  //   },
  //   destroy: function () {
  //     animatedKilled = true;
  //     window.removeEventListener('scroll', animate);
  //   }
  // }




