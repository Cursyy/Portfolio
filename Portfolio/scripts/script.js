// Burger menu

let btn = document.querySelector(".burger-menu");
let content = document.getElementById("content");

btn.addEventListener("click", function () {
  content.classList.toggle("open");
});

// Loading page

window.addEventListener("load", function () {
  let preloader = document.getElementById("preloader");
  let content = document.getElementById("content");
  const inputText = "Welcome to my portfolio...";
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = "";
  typeWriter(inputText, 0, outputElement);
  setTimeout(function () {
    preloader.style.display = "none";
    content.style.display = "grid";
  }, 1800);
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

// Tabs

window.onload = function () {
  tabContent = document.getElementsByClassName("tabContent");
  tabs = document.getElementsByClassName("tab");
  nav_items = document.getElementsByClassName("nav_item");
  content_box = document.getElementById("content_box");
  sidebar = document.getElementById("sidebar");
  tabs_menu = document.getElementById("tabs_menu");
  hideTabsContent(1);
};

function hideTabsContent(a) {
  for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
    tabs[i].classList.remove("active");
  }
}

function showTabsContent(a) {
  if (tabContent[a].classList.contains("hide")) {
    hideTabsContent(0);
    tabContent[a].classList.add("show");
    tabs[a].classList.add("active");
    tabContent[a].classList.remove("hide");
  }
}

document.getElementById("tabs_menu").onclick = function (event) {
  let target = event.target;
  if (target.className == "tab") {
    for (let i = 0; i < tabs.length; i++) {
      if (target == tabs[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
};

document.getElementById("menu_list").onclick = function (event) {
  let target = event.target;
  if (target.className == "nav_item") {
    for (let i = 0; i < nav_items.length; i++) {
      if (target == nav_items[i]) {
        showTabsContent2(i);
        break;
      }
    }
  }
};

function showTabsContent2(a) {
  content.classList.toggle("open");
  if (a == 0) {
    sidebar.style.display = "flex";
    content_box.style.display = "none";
  } else {
    sidebar.style.display = "none";
    content_box.style.display = "grid";
    if (tabContent[a - 1].classList.contains("hide")) {
      hideTabsContent(0);
      tabContent[a - 1].classList.add("show");
      tabContent[a - 1].classList.remove("hide");
    }
  }
}
