const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "ece3b30096da950049fee9dbc5691cd3";

function onGeoOk(position) { //모든게 잘될때 실행될 함수
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; 
    //숫자들을 장소로 바꿔줄 API서비스. 섭씨는 units=metric사용
    fetch(url) //fetch로 API통신. 서버가 응답할때가지 기다리지않으면 값을 못받음
      .then((response) => response.json()) //.than()을 사용하여 json값을 넘겨받음
      .then((data) => {
        city.innerText = data.name; //data.name:도시이름
        weather.innerText = `${data.weather[0].main}/${data.main.temp}℃/`; 
      });
  }
  function onGeoError() { //에러가 발생했을때 실행될 함수
    alert("Can't find you. No weather for you.");
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //이 함수는 user의 위치를 줌.(success, error)