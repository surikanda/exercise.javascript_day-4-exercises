
var animate;
const buttons = document.querySelectorAll("button");
for(var i=0; i<buttons.length;i++) {
    let currentButton = buttons[i];
    currentButton.addEventListener('mouseenter', () => changeToCoral(event.target));
    currentButton.addEventListener('mouseleave', () => backToNormal(event.target));
    currentButton.addEventListener('click', () => moveImage(event.target.id));
    document.addEventListener('mouseup', () => {clearTimeout(animate);});
}

function changeToCoral(eventTarget) {
    eventTarget.style.backgroundColor = "coral";
}

function changeToWhite(eventTarget) {
    eventTarget.style.backgroundColor = "white";
}

function backToNormal(eventTarget) {
    eventTarget.style.backgroundColor='';
}

function moveImage(direction) {
    let imgObjStyle = imgObj.style;
   // let imgObjStyleDirection;

    if(direction === 'KeyD') {        
        imgObjStyle.left = parseInt(imgObjStyle.left) + 10 + 'px';
    }

    if(direction === 'KeyA') {
        imgObjStyle.left = parseInt(imgObjStyle.left) - 10 + 'px';
    }

    if(direction === 'KeyW') {
        imgObjStyle.top = parseInt(imgObjStyle.top) - 10 + 'px';
    }

    
    if(direction === 'KeyS') {
        imgObjStyle.top = parseInt(imgObjStyle.top) + 10 + 'px';
    }
    animate = setTimeout(function(){moveImage(direction);}, 20);
}

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
}


window.onload = init;