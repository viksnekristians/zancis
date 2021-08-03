let toggleNavStatus = false;

let toggleNav = function() {
  let getSideBar = document.querySelector(".nav-sidebar");
  let getSideBarUl = document.querySelector(".nav-sidebar ul");
  let getSideBarTitle = document.querySelector(".nav-sidebar span");
  let getSideBarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSideBarUl.style.visibility = "visible";
    getSideBar.style.width = "270px";
    getSideBar.style.borderRadius = "0 7% 7% 0";
    let arrayLength = getSideBarLinks.length;

    for (let i = 0; i < arrayLength; i++) {
      getSideBarLinks[i].style.opacity = "1";
      getSideBarTitle.style.opacity = "0.5";
    }

    toggleNavStatus = true;
  } else {
    getSideBarUl.style.visibility = "hidden";
    getSideBar.style.width = "60px";
    getSideBar.style.borderRadius = "0";

    let arrayLength = getSideBarLinks.length;

    for (let i = 0; i < arrayLength; i++) {
      getSideBarLinks[i].style.opacity = "0";
      getSideBarTitle.style.opacity = "0";
    }
    toggleNavStatus = false;
  }
}
