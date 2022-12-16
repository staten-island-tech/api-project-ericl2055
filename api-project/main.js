const URL = "https://www.boredapi.com/api/activity";

function api() {}
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    let activity = data.activity;
    let type = data.type;
    let participants = data.participants;
    let price = data.price;
    DOM.activity.insertAdjacentHTML(
      "afterend",
      `<div class = "card" id = "card">
      <h1>${activity}</h1>   </div>`
    );
    DOM.type.insertAdjacentHTML(
      "afterend",
      `<div class = "card" id = "card">
     <h2>${type}</h2>
      </div>`
    );
    DOM.participants.insertAdjacentHTML(
      "afterend",
      `<div class = "card" id = "card">
    <h2>${participants}</h2>
      </div>`
    );
    DOM.price.insertAdjacentHTML(
      "afterend",
      `<div class = "card" id = "card">
     <h2>${price}</h2>
      </div>`
    );
    console.log(data);
  } catch (error) {
    DOM.custom.insertAdjacentHTML(
      "beforebegin",
      `<h5>Sorry, no activity provided.</h5>`
    );
  }
}
getData(URL);
import { DOM } from "./DOM";
