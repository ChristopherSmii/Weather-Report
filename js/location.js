const myLocation = ()=>{
    const allowLocation=(position)=>{
        const locationLatitude=position.coords.latitude;
        const locationLongitude=position.coords.longitude;
        const geoApi='https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+locationLatitude+'&longitude='+locationLongitude+'&localityLanguage=en';
        // Fetching Data
        fetch(geoApi)
        .then(res=>res.json())
        .then(data=>{
            
            weatherDisplay(data.city,locationLatitude,locationLongitude);
            weatherFact();
        })
    }
    const denyLocation=()=>{
        console.log("something is wrong");
    }
    navigator.geolocation.getCurrentPosition(allowLocation,denyLocation);
}
myLocation();
