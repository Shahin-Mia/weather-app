function searchLocation() {
    const searchInput = document.getElementById('search-input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=1bda2558228f99912b867e4a876e68c9`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const temp = document.getElementById("temp");
            temp.innerText = Math.ceil(data.main.temp - 273.15);

            const locationName = document.getElementById('location');
            locationName.innerText = data.name

            const weather = document.querySelector('.lead')
            weather.innerText = data.weather[0].main

            const image = document.getElementById('img');
            image.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        })
}