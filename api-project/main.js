const randomURL = "https://www.boredapi.com/api/activity";
import { DOM } from "./DOM";
function select() {
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
  <button id="submittype">Submit</button></div>`
  );
}
function slider() {
  let slider = document.querySelectorAll("#participants");
  let output = document.querySelectorAll("#demo");
  output[0].innerHTML = "Value : " + slider[0].value;
  slider[0].oninput = function () {
    output[0].innerHTML = "Value : " + this.value;
  };
}
function filtertype() {
  let submit = document.querySelectorAll("#submittype");
  let selecttype = document.querySelectorAll("#inputtype");
  submit.forEach((button) => {
    button.addEventListener("click", function () {
      const URL2 = `http://www.boredapi.com/api/activity?type=${selecttype[0].value}`;
      if (selecttype[0].value == "1") {
        remove();
        removerror();
        getparticipant(URL);
      } else {
        remove();
        removerror();
        gettype(URL2);
      }
    });
  });
}

function filterpart() {
  let submit = document.querySelectorAll("#submitpart");
  let slider = document.querySelectorAll("#participants");
  submit.forEach((button) => {
    button.addEventListener("click", function () {
      const URL = `http://www.boredapi.com/api/activity?participants=${slider[0].value}`;
      remove();
      removerror();
      getparticipant(URL);
    });
  });
}

DOM.new.addEventListener("click", function () {
  remove();
  removerror();
  getrandom(randomURL);
});

DOM.buttontype.addEventListener("click", function () {
  removecustom();
  select();
  filtertype();
  removerror();
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
      <button id="submitpart">Submit</button>
    </div></div>`
  );
  filterpart();
  slider();
  removerror();
});
function removerror() {
  let card = document.querySelectorAll("#error");
  card.forEach((card) => {
    card.remove();
  });
}
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
      "beforeend",
      `<div class = "card" id = "card">
      <h3>${activity}</h3>   </div>`
    );
    DOM.type.insertAdjacentHTML(
      "beforeend",
      `<div class = "card" id = "card">
     <h3>${type}</h3>
      </div>`
    );
    DOM.participants.insertAdjacentHTML(
      "beforeend",
      `<div class = "card" id = "card">
    <h3>${participants}</h2>
      </div>`
    );
  } catch (error) {
    DOM.activity.insertAdjacentHTML(
      "beforeend",
      `<h5 id="error">Sorry, no activity provided.</h5>`
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
      "beforeend",
      `<div class = "card" id = "card">
      <h3>${activity}</h3>   </div>`
    );
    DOM.type.insertAdjacentHTML(
      "beforeend",
      `<div class = "card" id = "card">
     <h3>${type}</h3>
      </div>`
    );
    DOM.participants.insertAdjacentHTML(
      "beforeend",
      `<div class = "card" id = "card">
    <h3>${participants}</h2>
      </div>`
    );
  } catch (error) {
    DOM.activity.insertAdjacentHTML(
      "beforeend",
      `<h5 id="error">Sorry, no activity provided.</h5>`
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
      "beforeend",
      `<div class = "card" id = "card">
      <h3>${activity}</h3>   </div>`
    );
    DOM.type.insertAdjacentHTML(
      "beforeend",
      `<div class = "card" id = "card">
     <h3>${type}</h3>
      </div>`
    );
    DOM.participants.insertAdjacentHTML(
      "beforeend",
      `<div class = "card" id = "card">
    <h3>${participants}</h2>
      </div>`
    );
  } catch (error) {
    DOM.activity.insertAdjacentHTML(
      "beforebegin",
      `<h5>Sorry, no activity provided.</h5>`
    );
  }
}

getrandom(randomURL);
select();
