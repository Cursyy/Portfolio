window.addEventListener('load', function() {
    let preloader = document.getElementById('preloader');
    let content = document.getElementById('content');
    const inputText = "Welcome to my portfolio...";
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = "";
    typeWriter(inputText, 0, outputElement);
    setTimeout(function() {
        preloader.style.display = 'none'; 
        content.style.display = 'grid'; 
    }, 2500);
});

function typeWriter(text, i, element) {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(function () {
        typeWriter(text, i, element);
      }, 50);
    }
  }

window.onload=function(){
    tabContent = document.getElementsByClassName('tabContent');
    tabs = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a){
    for(let i = a; i < tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tabs[i].classList.remove('active');
    }
}

function showTabsContent(a){
    if(tabContent[a].classList.contains('hide')){
        hideTabsContent(0);
        tabContent[a].classList.add('show')
        tabs[a].classList.add('active');
        tabContent[a].classList.remove('hide');
    }
}

document.getElementById("tabs_menu").onclick = function(event){
    console.log('click');
    let target = event.target;
    if(target.className == 'tab'){
        console.log('tab');
        for(let i = 0; i < tabs.length; i++){
            if(target == tabs[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

// document.querySelector('.social_icon1').addEventListener('click', function(){
//     document.querySelector('.social_icon1').src = "images/discord (1).png";
// });