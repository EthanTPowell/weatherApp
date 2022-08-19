const button = document.getElementById("button");
const form = document.getElementById("form");
const input = document.getElementById("input");
const weatherBoard = document.getElementById("weatherBoard");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted");
  let inputString = input.value;
  let city = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputString}&appid=70734cffaf9e689706f4e4d333678a01`
  )
    .then((response) => response.json())
    // .then((data) => array.from(data))

      .then((data) => {
          //converting Kelvin from the api to Fahrenheit
          let tempF = (data.main.temp - 273.15) * 1.8 + 32
          weatherBoard.innerHTML += `<h1>${inputString}:</h1>`
        weatherBoard.innerHTML += `<div><h2>Temperature:${tempF}</h2></div>`
      console.log(`data: ${JSON.stringify(data, null, 2)}`);
        data.weather.forEach((element) => {
          weatherBoard.innerHTML += `<div><h3>${element.main}:</h3><p>${element.description}</p></div>`;
          
        // console.log(JSON.stringify(element, null, 2));
      });
    });

  form.reset();
});
