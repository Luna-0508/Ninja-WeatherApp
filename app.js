const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUI = data => {
  const cityDet = data.cityDet;
  const weather = data.weather;

  //   update details template
  details.innerHTML = `
            <h5 class="my-5">${cityDet.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;</span>
            </div>
          `;

  // remove d-none class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove(".d-none");
  }
};

const updateCity = async city => {
  const cityDet = await getCity(city);
  const weather = await getWeather(cityDet.Key);

  return { cityDet, weather };
};

cityForm.addEventListener("submit", e => {
  //prevent default  action
  e.preventDefault();

  //   get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //   update the city ui with new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
