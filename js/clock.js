const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); //현재 몇월 몇일 몇시 몇초 등등 값을 얻을수있음.
    const hours = String(date.getHours()).padStart(2, "0"); //string으로 숫자를 문자로 바꿔줌, padStart는 원래길이보다 늘릴때 사용하는거고 2자리, 빈곳은 string앞쪽을 0으로 채운다는 뜻
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }
  
  getClock();
  setInterval(getClock, 1000);
  //바로 이부분이 실시간으로 보이게하는 부분임. 1000ms(1초)마다 실행되도록 함.