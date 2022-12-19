const URL = "https://www.boredapi.com/api/activity";

DOM.partoutput.innerHTML = DOM.slider.value;
DOM.slider.oninput = function () {
  DOM.partoutput.innerHTML = this.value;
};
function api() {}
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    let activity = data.activity;
    let type = data.type;
    let participants = data.participants;
    DOM.activity.insertAdjacentHTML(
      "afterend",
      `<div class = "card" id = "card">
      <h3>${activity}</h3>   </div>`
    );
    DOM.type.insertAdjacentHTML(
      "afterend",
      `<div class = "card" id = "card">
     <h4>${type}</h4>
      </div>`
    );
    DOM.participants.insertAdjacentHTML(
      "afterend",
      `<div class = "card" id = "card">
    <h4>${participants}</h2>
      </div>`
    );
    console.log(data);
  } catch (error) {
    console.log(error);
    DOM.custom.insertAdjacentHTML(
      "beforebegin",
      `<h5>Sorry, no activity provided.</h5>`
    );
  }
}
getData(URL);
import { DOM } from "./DOM";
