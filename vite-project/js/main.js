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
<h1>${menu.Name}</h1>
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
