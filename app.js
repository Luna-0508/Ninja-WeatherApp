const cityForm = document.querySelector("form");

const updateCity = async city => {
  const cityDet = await getCity(city);
  const weather = await getWeather(cityDet.Key);

  return {
    cityDet: cityDet,
    weather: weather,
  };
};

cityForm.addEventListener("submit", e => {
  //prevent default  action
  e.preventDefault();

  //   get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //   update the city ui with new city
  updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
