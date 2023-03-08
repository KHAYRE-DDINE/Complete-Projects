let planetImage = document.querySelectorAll(".left img");
let planets = document.querySelectorAll(".right .planets span");
let call = new XMLHttpRequest();

planets.forEach((e) => {
  e.onclick = function () {
    let data;
    call.onreadystatechange = function () {
      if (call.status == 200 && call.readyState == 4) {
        data = JSON.parse(call.responseText).destinations;
        for(i=0; i<data.length; i++){
            planetImage[i].src = data[e.dataset.index].images.png
        }
        console.log( data);
      }
    };
    planets.forEach((e)=>{
        e.classList.remove("show")
    })
    e.classList.add("show")
    call.open("GET", "data.json", true);
    call.send();
  };
});
