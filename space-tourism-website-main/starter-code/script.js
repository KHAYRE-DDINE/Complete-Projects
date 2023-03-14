let planetImage = document.querySelectorAll(".left img");
let planets = document.querySelectorAll(".right .planets span");
let call = new XMLHttpRequest();

// DESTINATION INFORMATION
planets.forEach((e) => {
  e.onclick = function () {
    let data;
    call.onreadystatechange = function () {
      if (call.status == 200 && call.readyState == 4) {
        data = JSON.parse(call.responseText).destinations;
        for (i = 0; i < data.length; i++) {
          planetImage[i].src = data[e.dataset.index].images.png;
        }
        console.log(data);
      }
    };
    planets.forEach((e) => {
      e.classList.remove("show");
    });
    e.classList.add("show");
    call.open("GET", "data.json", true);
    call.send();
  };
});

// CREW INFORMATION
let role = document.querySelector(".left .role");
let name = document.querySelector(".left .title .h1");
let bio = document.querySelector(".left .para small");
let dotes = document.querySelectorAll(".left .dotes span");
let img = document.querySelector(".right .image img");
console.log(img);
// console.log(name);
// console.log(bio);
// console.log(dotes);

dotes.forEach((e) => {
  e.onclick = function () {
    let data;
    let get;
    call.onreadystatechange = () => {
      data = JSON.parse(call.responseText).crew;
      if (call.status == 200 && call.readyState == 4) {
        for (i = 0; i <= data.length; i++) {
           get = data[e.dataset.in];
        }
        role.textContent = get["role"]
        name.textContent = get["name"]
        bio.textContent = get["bio"]
        img.src = get["images"]["png"]
      }
      // console.log(data.crew[2])
    };
    call.open("GET", "data.json", true);
    call.send();

    dotes.forEach((el) => {
      el.classList.remove("white");
    });
    e.classList.add("white");

    // console.log(e.dataset.in);
  };
});
