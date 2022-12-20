const randomURL = "https://www.boredapi.com/api/activity";
const typeURL = "http://www.boredapi.com/api/activity?type=";
const partURL1 = "http://www.boredapi.com/api/activity?participants=1";
const partURL2 = "http://www.boredapi.com/api/activity?participants=2";
const partURL3 = "http://www.boredapi.com/api/activity?participants=3";
const partURL4 = "http://www.boredapi.com/api/activity?participants=4";
const partURL5 = "http://www.boredapi.com/api/activity?participants=5";

DOM.partoutput.innerHTML = DOM.slider.value;
DOM.slider.oninput = function () {
  DOM.partoutput.innerHTML = this.value;
};
DOM.submit.addEventListener("click", function () {
  if (DOM.inputtype.value == "1") {
    remove();
    filterparts();
  }
});
DOM.new.addEventListener("click", function () {
  remove();
  getrandom(randomURL);
});
function filterparts() {
  if (DOM.slider.value == "1") {
    get1participant(typeURL);
  }
}
function remove() {
  let card = document.querySelectorAll("#card");
  card.forEach((card) => {
    card.remove();
  });
}
async function get1participant(partURL1) {
  try {
    const response = await fetch(partURL1);
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
     <h3>${type}</h3>
      </div>`
    );
    DOM.participants.insertAdjacentHTML(
      "afterend",
      `<div class = "card" id = "card">
    <h3>${participants}</h2>
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
async function getrandom(randomURL) {
  try {
    const response = await fetch(randomURL);
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
     <h3>${type}</h3>
      </div>`
    );
    DOM.participants.insertAdjacentHTML(
      "afterend",
      `<div class = "card" id = "card">
    <h3>${participants}</h2>
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
//get1participant(partURL1);
getrandom(randomURL);
import { DOM } from "./DOM";
