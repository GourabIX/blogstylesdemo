function changeActiveNav() {
  var navItemList = document.getElementsByClassName("nav-link");
  var activeNavList = document.getElementsByClassName("activeNav");

  if (activeNavList.length === 0)
    document.querySelector(".nav-link").classList.add("activeNav");
  for (let i = 0; i < navItemList.length; i++) {
    navItemList[i].addEventListener("click", function () {
      let currentActiveNav = document.getElementsByClassName("activeNav");
      for (let j = 0; j < currentActiveNav.length; j++) {
        currentActiveNav[j].classList.remove("activeNav");
      }
      navItemList[i].classList.add("activeNav");
    });
  }
}
