var mainBody = document.getElementById("mainbody")
var mainText = document.getElementById("maintext")
var mainBox = document.getElementById("mainbox")
var showIcon = document.getElementById("showicon")
var showIcon2 = document.getElementById("showicon2")
var downBox = document.getElementById("downbox")
var mainboxText = document.getElementById("mainboxtext")
var dragCont = document.getElementById("dragcont")
var firstBox = document.getElementById("firstbox")
var firstboxText = document.getElementById("firstboxtext")
var secondBox2 = document.getElementById("secondbox2")
var secondboxText = document.getElementById("secondboxtext")
var thirdBox = document.getElementById("thirdbox")
var thirdboxText = document.getElementById("thirdboxtext")
var fourthBox = document.getElementById("fourthbox")
var fourthboxText = document.getElementById("fourthboxtext")
var portfolioText = document.getElementById("portfoliotext")

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;


dragCont.addEventListener("touchstart", dragStart, false);
dragCont.addEventListener("touchend", dragEnd, false);
dragCont.addEventListener("touchmove", drag, false);

dragCont.addEventListener("mousedown", dragStart, false);
dragCont.addEventListener("mouseup", dragEnd, false);
dragCont.addEventListener("mousemove", drag, false);



var setmaintext = "GET READY"
var emptytext = ""

function turnblack() {
    mainBody.classList.add("turnblack")
    setTimeout(() => {
        mainText.innerText = setmaintext
        mainText.style.width = "240px"
    }, 500);

    setTimeout(() => {
        portfolioText.classList.remove("removeh1")
        portfolioText.classList.add("downtext")
        mainText.classList.remove("maintext")
        mainText.classList.add("kilmaintext")
        mainBody.classList.remove("removecursor")
        dragCont.classList.remove("dragcont")
        dragCont.classList.add("dragconttoggle")
        mainText.innerText = ""

    }, 1600);

    setTimeout(() => {
        mainBox.classList.add("box")
        showIcon.classList.remove("killicon")
        showIcon2.classList.remove("killicon")
        showIcon.classList.add("iconx")
        showIcon2.classList.add("icondown")
    }, 1800);
}

function showdownbox() {
    portfolioText.classList.add("downtext2")
    portfolioText.classList.remove("downtext")
    downBox.classList.add("secondbox")
    downBox.classList.add("changetop")
    downBox.classList.add("secondboxopen")
    mainboxText.classList.remove("removeh1")
    mainboxText.classList.add("mainboxtext")
    showIcon.classList.add("changetopx")    
    showIcon2.classList.add("changetopdown")  

    if(mainboxText.classList.contains("mainboxtext")) {
      mainboxText.classList.remove("removeh1")
    } else {
      mainboxText.classList.add("removeh1")
    }

    if(downBox.classList.contains("secondboxclose")) {
      downBox.classList.remove("secondboxclose")
      downBox.classList.add("secondbox")
    }

    setTimeout(() => {
      firstBox.classList.remove("removebox1")
      firstBox.classList.add("firstbox")
      secondBox2.classList.remove("removebox1")
      secondBox2.classList.add("secondbox2")
      thirdBox.classList.remove("removebox1")
      thirdBox.classList.add("thirdbox")
      fourthBox.classList.remove("removebox1")
      fourthBox.classList.add("fourthbox")
      firstboxText.classList.remove("removefirstboxtext")
      firstboxText.classList.add("projects")
      secondboxText.classList.remove("removefirstboxtext")
      secondboxText.classList.add("mywork")
      thirdboxText.classList.remove("removefirstboxtext")
      thirdboxText.classList.add("changelog")
      fourthboxText.classList.remove("removefirstboxtext")
      fourthboxText.classList.add("contact2")
    }, 2300);

  }

function closeeverything() {


    if(downBox.classList.contains("secondboxopen")) {
    downBox.classList.remove("secondboxclose")
    downBox.classList.add("secondboxclose")
    }

    setTimeout(() => {
    fourthBox.classList.add("removebox1")
    fourthBox.classList.remove("fourthbox")
    fourthboxText.classList.add("removefirstboxtext")
    fourthboxText.classList.remove("contact2")
    }, 50);

   setTimeout(() => {
    firstBox.classList.add("removebox1")
    firstBox.classList.remove("firstbox")
    secondBox2.classList.add("removebox1")
    secondBox2.classList.remove("secondbox2")
    thirdBox.classList.add("removebox1")
    thirdBox.classList.remove("thirdbox")
    firstboxText.classList.add("removefirstboxtext")
    firstboxText.classList.remove("projects")
    secondboxText.classList.add("removefirstboxtext")
    secondboxText.classList.remove("mywork")
    thirdboxText.classList.add("removefirstboxtext")
    thirdboxText.classList.remove("changelog")
   }, 100);
   

   setTimeout(() => {
    mainboxText.classList.add("removeh1")
    mainboxText.classList.remove("mainboxtext")
   }, 600);

    setTimeout(() => {
      downBox.classList.remove("secondbox")
      downBox.classList.remove("changetop")
      downBox.classList.remove("secondboxopen")
      showIcon.classList.remove("changetopx")    
      showIcon2.classList.remove("changetopdown")  
      downBox.classList.add("secondboxclose")
      portfolioText.classList.remove("downtext2")
  portfolioText.classList.add("downtext")
    }, 900);
    
}


function dragStart(e) {
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    if (e.target === mainBox) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(e) {
    if (active) {
    
      e.preventDefault();
    
      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, mainBox);
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
}

