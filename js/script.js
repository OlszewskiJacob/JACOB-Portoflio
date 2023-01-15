//working on it!
function WorkingOnItAlert() {
  alert("SORRY BUT THIS SECTION IS NOT READY!");
}


//slider: portfolio
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("Slider-Portfolio");
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
  var currenttop = 0;
  if (obj.offsetParent) {
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [currenttop];
  }
}



//contact mail
function sendMail() {
  var link = "mailto:jakubolszewski1996@outlook.com"
    //  + "&subject=" + encodeURIComponent("Portfolio:")
    //  + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;

  window.location.href = link;
}


//animation on header by loading png sequence on mouse move


// function AnimHeader() {
//   Number.prototype.to = function* (end) {
//     const start = this;
//     const step = end > start ? 1 : -1;
//     const fn = function* (n) {
//       let next = start + step * n;
//       yield next;
//       if (next === end) return;
//       yield* fn(n + 1);
//     };
//     yield start;
//     yield* fn(0);   
//   }

//   const asc = [...(0).to(50)];
//   console.log(asc);
// }


function AnimHeader() {
  //collect mouse information
  window.addEventListener("mousemove", (e) => {
    let xPos = e.clientX / 100;
    console.log(xPos.toFixed(0));
    //call backgroudnn class and change image on mouse x position
    var x = document.getElementById("Home-Call");
    var stylestoChange = '/images/Home/HomeImage-';
    var numericToAnimate = xPos.toFixed(0) + '.png';
    x.style = 'background-image:url(' + stylestoChange + numericToAnimate + '), linear-gradient(0.5turn, #C0D9F8, #C0D9F8, #E0EFFA);';
  });
}



