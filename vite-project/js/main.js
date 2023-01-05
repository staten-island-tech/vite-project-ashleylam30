import "../styles/style.css";
import { menu } from "./menu";
import { DOM } from "../js/DOM.js";

document.querySelectorAll("#app").innerHTML = `

`;
console.log(menu);

menu.forEach((menu) =>
  DOM.mainpage.insertAdjacentHTML(
    "beforeend",
    `

<div class="child">
<img class="img" src="${menu.IMG}"><img>
<h1 class="name">${menu.Name}</h1>
<h2 class="price">$${menu.Price}</h2>
</div>

`
  )
);

DOM.dessertbtn.addEventListener("click", function () {
  DOM.mainpage.innerHTML = "";
  DessertMenu();
});

function DessertMenu() {
  menu
    .filter((menu) => menu.Type === "Dessert")
    .forEach((menu) =>
      DOM.mainpage.insertAdjacentHTML(
        "beforeend",
        `

<div class="child">
<img class="img" src="${menu.IMG}"><img>
<h1>${menu.Name}</h1>
<h2 class="price">$${menu.Price}</h2>
</div>

`
      )
    );
}

DOM.starterbtn.addEventListener("click", function () {
  DOM.mainpage.innerHTML = "";
  startermenu();
});

function startermenu() {
  menu
    .filter((menu) => menu.Type === "Appetizer")
    .forEach((menu) =>
      DOM.mainpage.insertAdjacentHTML(
        "beforeend",
        `
    
  <div class="child">
  <img class="img" src="${menu.IMG}"><img>
  <h1>${menu.Name}</h1>
  <h2 class="price">$${menu.Price}</h2>
  </div>
  
  `
      )
    );
}

DOM.maindishbtn.addEventListener("click", function () {
  DOM.mainpage.innerHTML = "";
  mainmenu();
});

function mainmenu() {
  menu
    .filter((menu) => menu.Type === "Main Dish")
    .forEach((menu) =>
      DOM.mainpage.insertAdjacentHTML(
        "beforeend",
        `
    
  <div class="child">
  <img class="img" src="${menu.IMG}"><img>
  <h1>${menu.Name}</h1>
  <h2 class="price">$${menu.Price}</h2>
  </div>
  
  `
      )
    );
}

DOM.everythingbtn.addEventListener("click", function () {
  DOM.mainpage.innerHTML = "";
  everything();
});

function everything() {
  menu.forEach((menu) =>
    DOM.mainpage.insertAdjacentHTML(
      "beforeend",
      `
    
  <div class="child">
  <img class="img" src="${menu.IMG}"><img>
  <h1>${menu.Name}</h1>
  <h2 class="price">$${menu.Price}</h2>
  </div>
  
  `
    )
  );
}

DOM.changetheme.addEventListener("click", function () {
  if (document.body.classList.contains("warm")) {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  } else {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  }
});
