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
<h2>${menu.Price}</h2>
</div>

`
  )
);
