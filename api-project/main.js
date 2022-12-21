DOM.partoutput.innerHTML = DOM.slider.value;
DOM.slider.oninput = function () {
  DOM.partoutput.innerHTML = this.value;
};

DOM.submit.addEventListener("click", function () {
  const URL = `http://www.boredapi.com/api/activity?participants=${DOM.slider.value}`;
  if (DOM.selecttype.value == "1") {
    remove();
    getparticipant(URL);
  }
});
DOM.new.addEventListener("click", function () {
  remove();
  getrandom(randomURL);
});

function remove() {
  let card = document.querySelectorAll("#card");
  card.forEach((card) => {
    card.remove();
  });
}

async function getparticipant(URL) {
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

getrandom(randomURL);
import { DOM } from "./DOM";
import { randomURL } from "./URLS.JS";
