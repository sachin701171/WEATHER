// console.log("Hello jee");

// const API_key = "7bf8cd3cc3b6c59eb9ae2192a5f4b1f2";

// function renderWeatherInfo(data){
//     let newpara = document.createElement('p');
//     newpara.innerHTML = `${data?.main?.temp.toFixed(2)} °C`

//     document.body.appendChild(newpara);
// }

// async function showWeather(){
   
//     try {

//         let city = 'goa';

//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
//     const data = await response.json();

//     console.log("Weather data ->" , data);  // 

//    renderWeatherInfo(data);
// }
        
//      catch (error) {

//         console.log('Error found' , error);
//     }
// }

// async function getCustomWeather(){

//     try {
//         let latitude = 17.6333;
//     let longitude = 18.3333;

//     let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`);
//     let data = await response.json();

//     console.log(data);
// }
//      catch (error) {
//         console.log("Error Found" , error);
//     }
// }  

// // TO FIND CURRENT LOCATION

// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPositon);
//     }
//     else{
//         console.log("No Geo Location support");
//     }
// }

// function showPositon(position){
//     let lat = position.coords.latitude;
//     let longi = position.coords.longitude;

//     console.log(lat);
//     console.log(longi);
// }


// // Practice API
// async function dogBread(){

//     try {

//         let response = await fetch(`https://dog.ceo/api/breeds/image/random`);
//         let results = await response.json();

//     console.log(results); 

//     renderWeatherInfo(results);

//     } 
    
//     catch (error) {
//         console.log("data not found" , error);
//     }

   
// }

// my code statrs here
  
// const userTab = document.querySelector("[data-userWeather]");
// const searchTab = document.querySelector("[data-SearchWeather]");
// const userContainer = document.querySelector(".weather-container");
// const grantLocationContainer = document.querySelector(".grant-location-container");
// const searchForm = document.querySelector("[data-searchForm]");
// const loadingScreen = document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".user-info-container");
// const grantAccess = document.querySelector("[data-grantAccess]");


// // Initaialy Value need
// let currentTab = userTab;
// const API_key = "7bf8cd3cc3b6c59eb9ae2192a5f4b1f2";
// currentTab.classList.add("current-tab");
// getfromSessionStorage();


// function switchTab(clickedTab){
//     if(clickedTab!=currentTab)
//     {
//         currentTab.classList.remove("current-tab");
//         currentTab = clickedTab;
//         clickedTab.classList.add("current-tab");

//         if(!searchForm.classList.contains("active")){
//             userInfoContainer.classList.remove("active");
//             grantLocationContainer.classList.remove("active");
//             searchForm.classList.add("active");
//        }
//        else {
//         searchForm.classList.remove("active");
//         userInfoContainer.classList.remove("active");
//         // ab mai your weather tab  mai aa gaya hun, toh weather bhi display karan hoga so checked local storage 
//         //first for coordinates, if we have saved them there
//         getfromSessionStorage();
//        }
//     }
// }

// userTab.addEventListener('click', () =>{
//     // pass clicked tab as input parameter
//     switchTab(userTab);
// });

// searchTab.addEventListener('click' , ()=>{
//   // pass clicked tab as input parameter
//   switchTab(searchTab);
// })

// function getfromSessionStorage(){
//     const localCoordinates = sessionStorage.getItem("user-cordinate");
//     if(!localCoordinates){
//         grantLocationContainer.classList.add("active");
//     }
//     else{
//         const coordinates = JASON.parse(localCoordinates);
//         fetchUserWeatherInfo(coordinates);
//     }
// }

// async function fetchUserWeatherInfo(coordinates){
//       const {lat , lon} = coordinates;
//       // make grant container invisible
//       grantLocationContainer.classList.remove("active");

//       // male loader visible
//       loadingScreen.classList.add("active");

//       // API CALL
//       try {
//         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`);
//         let data = await response.json();

//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active")
//         renderWeatherInfo(data);
//       } 
      
//       catch (error) {
//         loadingScreen.classList.remove("active");
//         console.log("No weather found ->" , error);
//       }

//      function renderWeatherInfo(weatherInfo){
//         // firstly fetch the value
//        const cityName = document.querySelector('[data-cityName]');
//        const countryIcon = document.querySelector('[data-countryIcon]');
//        const desc = document.querySelector('[data-weatherDesc]');
//        const weatherIcon = document.querySelector('[data-weatherIcon]');
//        const temp = document.querySelector('[data-temp]');
//        const windspeed = document.querySelector('[data-windspeed]');
//        const humidity = document.querySelector('[data-humidity]');
//        const cloudiness = document.querySelector('[data-cloudiness]');

//        // fetch value from weatherInfo object and put it on UI elements

//        cityName.innerText = weatherInfo?.name;
//        countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
//        desc.innerText = weatherInfo?.weather?.[0]?.description;
//        weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//        temp.innerText = weatherIcon?.main?.temp;
//        windspeed.innerText = weatherInfo?.wind?.speed;
//        humidity.innerText =  weatherInfo?.main?.humidity;
//        cloudiness.innerText = weatherInfo?.clouds?.all;
       
//     } 
// }
 
//  function getLocation(){
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(showPostion);
//   }
//   else{
//     alert("No geolocation Support Available");
//   }
//  }

//   function showPostion(position){
//     const userCoordinates = {
//       lat : position.coords.latitude,
//       lon : position.coords.longitude,
//     }
//     sessionStorage.setItem("user-cordinates",JSON.stringify(userCoordinates));
//     fetchUserWeatherInfo(userCoordinates);
//   }

//   grantAccess.addEventListener('click' , getLocation);

//   const searchInput = document.querySelector('[data-searchInput]');
  
//   searchInput.addEventListener('submit' , (e) =>{
//      e.preventDefault();
//      let cityName = searchInput.Value;
//      if(cityName === ""){
//       return;
//      }
//      else{
//       fetchSearchWeatherInfo(cityName);
//      }
//   })

//   async function fetchSearchWeatherInfo(city){
//       loadingScreen.classList.add("active");
//       userInfoContainer.classList.remove('active');
//       grantAccess.classList.remove("active");

//       try {
//         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${lon}&appid=${API_key}&units=metric`);
//         let data = await response.json();
//         loadingScreen.classList.remove("active");
//         userInfoContainer.classList.add("active");
//         renderWeatherInfo(data);
//       } catch (error) {
//         alert("no weather found");
//       }
//   }

// SIR KA CODE YAHA SE HAI

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");
const error = document.querySelector(".error-container");

//initially vairables need????

let oldTab = userTab;
const API_KEY = "7bf8cd3cc3b6c59eb9ae2192a5f4b1f2";
oldTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(newTab) {
    if(newTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            //kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //main pehle search wale tab pr tha, ab your weather tab visible karna h 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
            //for coordinates, if we haved saved them there.
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(searchTab);
});

//check if cordinates are already present in session storage
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
        //agar local coordinates nahi mile
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
    // make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const  data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        console.log("not available");

    }

}

function renderWeatherInfo(weatherInfo) {
    //fistly, we have to fethc the elements 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    console.log(weatherInfo);

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;


}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //HW - show an alert for no gelolocation support available
        console.log("no geo location found");
    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === ""){

        error.classList.add("active");
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        return;
    }
    else
        fetchSearchWeatherInfo(cityName);
        
    })

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        // error.classList.add("active");
        // loadingScreen.classList.remove("active");
        // userInfoContainer.classList.remove("active");
        // grantAccessContainer.classList.remove("active");

    
    }
}

