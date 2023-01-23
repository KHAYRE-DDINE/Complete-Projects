let head = document.querySelector(".head");
let sublist = document.querySelector(".sublist");
let show = document.querySelector(".show");
let miniList = document.querySelector(".mini-list");

show.addEventListener("click", () => {
  show.classList.toggle("click");

  if (show.classList.contains("click")) {
    miniList.style.height = "100vh";
  } else {
    miniList.style.height = "0";
  }
});


// Section Skills

let skillBar = document.querySelectorAll(".skills .skill .bar");
let skillBarSpan = document.querySelectorAll(".skills .skill .bar span");
window.onscroll = () => {
  // console.log(window.scrollY);
  if (window.scrollY > 1112) {
    skillBar.forEach((e) => {
      // console.log(getComputedStyle(e, '::before').content)

      //    let pseEl =  getComputedStyle(e.firstElementChild, '::before').content ;
      //    pseEl.replace(pseEl, e.firstElementChild.style.width = e.dataset.percent);

      //    console.log(pseEl)

      e.firstElementChild.style.width = e.dataset.percent;
    });
  } else {
    skillBar.forEach((e) => {
      e.firstElementChild.style.width = "0%";
    });
  }
  if (window.scrollY > 509) {
    head.style.opacity = "1";
    console.log("good")
  } else {
    head.style.opacity = ".8";
  }
};

// Show Projects

let divPro = document.querySelectorAll(".show-proj .wrap");
let proSpaAll = document.querySelector(".projects .click");
let proSpa = document.querySelectorAll(".projects .click span");

proSpa.forEach((e) => {
  e.onclick = function () {
    proSpa.forEach((r) => {
      r.classList.remove("active");
    });
    e.classList.add("active");

    divPro.forEach((e) => {
      e.style.display = "none";
    });

    for (i = 0; i <= 3; i++) {
      if (divPro[i].dataset.show === e.dataset.show) {
        divPro[i].style.display = "";
      }
    }
  };
});
