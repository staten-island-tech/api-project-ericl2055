const randomURL = "https://www.boredapi.com/api/activity";
import { DOM } from "./DOM";
const partoutput = document.querySelectorAll("#demo");
const slider = document.querySelectorAll("#participants");
const selecttype = document.querySelectorAll("#inputtype");

function filter() {
  let card = document.querySelectorAll("#customize");
  console.log(selecttype.values);
  card.forEach((button) => {
    button.addEventListener("click", function () {
      console.log(button);
      const URL = `http://www.boredapi.com/api/activity?participants=${slider.value}`;
      const URL2 = `http://www.boredapi.com/api/activity?type=${selecttype.value}`;
      if (selecttype.value == "1") {
        remove();
        getparticipant(URL);
      } else {
        remove();
        gettype(URL2);
      }
    });
  });
}

DOM.new.addEventListener("click", function () {
  remove();
  getrandom(randomURL);
});

DOM.buttontype.addEventListener("click", function () {
  removecustom();

  DOM.custom.insertAdjacentHTML(
    "beforeend",
    `<div id="customize"><h3>Select Type:</h3>
  <select type="input" id="inputtype">
    <option value="1">Select</option>
    <option value="busywork">busywork</option>
    <option value="charity">charity</option>
    <option value="cooking">cooking</option>
    <option value="diy">diy</option>
    <option value="education">education</option>
    <option value="music">music</option>
    <option value="recreational">recreational</option>
    <option value="relaxation">relaxation</option>
    <option value="social">social</option>
  </select>
  <button id="submit">Submit</button></div>`
  );
  filter();
});

DOM.buttonpart.addEventListener("click", function () {
  removecustom();
  DOM.custom.insertAdjacentHTML(
    "beforeend",
    `<div id="customize"><h3>Amount of Participants:</h3>
    <div class="slidecontainer">
      <input
        type="range"
        min="1"
        max="5"
        value="3"
        class="slider"
        id="participants"
      />
      <h3 id="demo"></h3>
      <button id="submit">Submit</button>
    </div></div>`
  );
  filter();
});
function remove() {
  let card = document.querySelectorAll("#card");
  card.forEach((card) => {
    card.remove();
  });
}
function removecustom() {
  let card = document.querySelectorAll("#customize");
  card.forEach((card) => {
    card.remove();
  });
}

async function gettype(URL2) {
  try {
    const response = await fetch(URL2);
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
    console.log(URL2);
  } catch (error) {
    console.log(error);
    console.log(URL2);
    DOM.custom.insertAdjacentHTML(
      "beforebegin",
      `<h5>Sorry, no activity provided.</h5>`
    );
  }
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
