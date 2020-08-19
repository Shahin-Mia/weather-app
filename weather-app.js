function searchLocation() {
    const searchInput = document.getElementById('search-input').value;
    console.clear();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=1bda2558228f99912b867e4a876e68c9`)
        .then(res => res.json())
        .then(data => console.log(data))
}