// Personal Website - JavaScript.

// Home- Title Animation.
var symbols = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "{", "}", "[", "]", "<", ">", "_", "-", "/", "^", "*", "#"); // Total -20
var title = "------ ------";
var intervalStop = 0;
var positionTitle = 0;
var letters = 12;

// Load interval when page is refreshed.
window.onload = interval;

// Starts Interval
function interval() {
    // Initialize Title.
    document.getElementById("Home-Title-2").innerHTML = title;

    var interval1 = setInterval(titleAnimation, 300);
}

// Title Animation
function titleAnimation() {

    getName();
    document.getElementById("Home-Title-2").innerHTML = title;

    // // 25% chance of animation.
    if (intervalStop < 8) {
      for(var index = 1; index < 3; index++ ) {
        var chance_symbol = Math.floor((Math.random() * 20));
        var chance_position = Math.floor((Math.random() * 13));
        setName(chance_position, symbols[chance_symbol]);
        document.getElementById("Home-Title-2").innerHTML = title;
      }
    }
    else if  (intervalStop >= 8 && intervalStop <= 20) {
      var name = ["E", "l", "i", "s", "e", "o", " ", "G", "a", "r", "c", "i", "a"]
      setName(positionTitle, name[positionTitle]);

        var positionTitle2 = Math.floor((Math.random() * letters + (positionTitle + 1)));

        for(var index = 1; index < 3; index++ ) {
          var chance_symbol = Math.floor((Math.random() * 20));
          setName(positionTitle2, symbols[chance_symbol]);
          document.getElementById("Home-Title-2").innerHTML = title;
        }

      letters--;
      positionTitle++;
    }
    else {
      clearInterval(interval1);
    }

    intervalStop++;
}

function setName(position, character) {
  if ( position < 12 + 1 ) {
    title = title.substring(0, position) + character + title.substring(position + 1);
  }
  else {
    return;
  }
}
function getName() {
  return title;
}

//Home - Navigation Bar

function myStoryButton() {
  document.getElementById("My-Journey-Section").scrollIntoView(true);
}
function homeListItem1() {
  window.scrollTo(0, 0);
}
function homeListItem2() {
  document.getElementById("My-Story-Section").scrollIntoView(false);
}
function homeListItem3() {
  document.getElementById("My-Journey-Section").scrollIntoView(true);
}
function homeListItem4() {
  document.getElementById("My-Projects-Section").scrollIntoView(true);
}
function homeListItem5() {
  document.getElementById("Lets-Connect-Section").scrollIntoView(false);
}

// My-Projects
  // Images for redirecting to project info page.
function myProjectsImage1() {
  window.open("https://github.com/SenpaiNoticedMe", "_blank")
  // location.href = "https://www.w3schools.com";
}
function myProjectsImage2() {
  window.open("https://github.com/SenpaiNoticedMe", "_blank")
  // location.href = "https://www.w3schools.com";
}
function myProjectsImage3() {
  window.open("https://github.com/SenpaiNoticedMe", "_blank")
  // location.href = "https://www.w3schools.com";
}
function myProjectsImage4() {
  window.open("https://github.com/SenpaiNoticedMe", "_blank")
  // location.href = "https://www.w3schools.com";
}
