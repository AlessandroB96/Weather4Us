

let button;
let heading;
let formatName;
let saveArray = false;


// reset Button function when 10 searches reached
function reset(event) {
    savedBtns = [];
    localStorage.setItem("Recent Searches", JSON.stringify(savedBtns));
    $(".cityBtn").remove();
}
    
    // API call for lat and long of city
    fetch("https://api.myptv.com/geocoding/v1/locations/by-text?searchText=" + cityInput, {
        method: "GET",
        headers: { apiKey: "Y2E4ODI1NGU1MjlhNGFmODllN2VhYTQ0NzM4ZWUzZDM6MjAwYmZlN2UtZWYzNi00ZDIyLTkzNjEtNjFiMGU2MmE4NGY3", "Content-Type": "application/json" },
    })
    .then(response => response.json())
    .then(result => {

        formatName = result.locations[0].formattedAddress;

        // Check if recent Button already exists, Don't Save/Append if so
        for (let i = 0; i < savedBtns.length; i++) {
            let btnCheck = savedBtns[i].nameCheck;
            if (btnCheck === formatName) {
                saveArray = false;
            }
        }
        return result.locations[0].referencePosition;
    })

    //weather data
    .then(function(data) {
        fetch(
            'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.latitude + '&lon=' + data.longitude + '&exclude=minutely&appid=d3c47a1f177d224c8f7fe16686ddb65e'
        ).then(function(response) {
            return response.json();
        })
        .then(console.log(data)) 

        })

    //lat long
    fetch("https://api.myptv.com/geocoding/v1/locations/by-text?searchText=" + cityInput, {
        method: "GET",
        headers: { apiKey: "Y2E4ODI1NGU1MjlhNGFmODllN2VhYTQ0NzM4ZWUzZDM6MjAwYmZlN2UtZWYzNi00ZDIyLTkzNjEtNjFiMGU2MmE4NGY3", "Content-Type": "application/json" },
    })
    .then(response => response.json())
    .then(result => {

        formatName = result.locations[0].formattedAddress;

        // Check if recent Button already exists, Don't Save/Append if so
        for (let i = 0; i < savedBtns.length; i++) {
            let btnCheck = savedBtns[i].nameCheck;
            if (btnCheck === formatName) {
                saveArray = false;
            }
        }
        return result.locations[0].referencePosition;
    })

          
           
function btnClicks() {
    button = document.querySelectorAll(".searchBtn");
}



