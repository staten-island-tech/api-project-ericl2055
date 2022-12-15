const URL = "https://www.boredapi.com/api/activity";
const DOM = {
  api: document.getElementById("api"),
};

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    DOM.api.insertAdjacentHTML;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
