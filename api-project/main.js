const URL = "http://taco-randomizer.herokuapp.com/";

async function getData(URL) {
  const response = await fetch(URL);
  console.log(response);
}
