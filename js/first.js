const weatherFacts = [
    "The highest temperature ever recorded on Earth was 134 degrees Fahrenheit (56.7 degrees Celsius) in Furnace Creek Ranch, Death Valley, California, USA on July 10, 1913.",
    "Lightning strikes the Earth about 100 times every second.",
    "The wettest place on Earth is Mawsynram, India, which receives an average annual rainfall of about 467 inches (11,871 millimeters).",
    "Hailstones can reach astonishing sizes, with the largest recorded hailstone falling in Vivian, South Dakota, USA on July 23, 2010, measuring 8 inches (20.3 centimeters) in diameter and weighing nearly 2 pounds (907 grams).",
    "Tornadoes can occur in every continent except Antarctica.",
    "The coldest temperature ever recorded on Earth was -128.6 degrees Fahrenheit (-89.2 degrees Celsius) at the Soviet Union's Vostok Station in Antarctica on July 21, 1983.",
    "Dust devils, small whirlwinds of dust and debris, are commonly seen in dry, arid regions and can reach heights of over 3,000 feet (914 meters).",
    "The phenomenon known as 'ball lightning' remains a mystery to scientists. It appears as glowing, spherical objects that vary in size and can move erratically before disappearing.",
    "Hurricanes, cyclones, and typhoons are all the same weather phenomenon, but are given different names depending on the region in which they occur. For example, hurricanes are in the Atlantic and Northeast Pacific, cyclones in the South Pacific and Indian Ocean, and typhoons in the Northwest Pacific.",
    "The world's strongest recorded wind speed occurred on April 12, 1934, on Mount Washington, New Hampshire, USA, reaching 231 miles per hour (372 kilometers per hour)."
];
const apiKey='70fab3c9a15809960d8ef1e949dee4ab';
if(!localStorage.name){
    localStorage.name = prompt('what is your name?');
}

const weatherFact=()=>{
    $("#gText").text('Fun weather fact:  '+weatherFacts[Math.floor(Math.random()*10)]);
    $("#name").text('Hello '+localStorage.name);
}

async function weatherDisplay(location,lat,lon){
$('#userLocation').text(location);
let apiUrl='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+apiKey+'&units=metric';
const response = await fetch(apiUrl);
let infoWeather=await response.json();
if(response){
    $('#aboveSpin').addClass('d-none');
}
console.log(apiUrl);
$('.card-img').attr('src', './Pictures/'+infoWeather.weather[0].main+'.png');
$('#locationTemp').text('temperature: '+Math.round(infoWeather.main.temp)+'°C');
$('#locationH').text('humidity: '+Math.round(infoWeather.main.humidity)+'%');
}