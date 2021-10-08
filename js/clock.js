const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); // date object = 호출하는 당시의 현재날짜랑 시간을 알려줌
    const hours = String(date.getHours()).padStart(2, "0"); //string으로 숫자를 문자로 바꿔줌
    const minutes = String(date.getMinutes()).padStart(2, "0"); // padStart는 string을 원래길이보다 늘릴때 사용하는거고
    const seconds = String(date.getSeconds()).padStart(2, "0"); // 2자리로 늘리고, 빈곳은 string앞쪽을 0으로 채운다는 뜻
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }
  
  getClock(); //시계불러옴 1회성
  setInterval(getClock, 1000);
  //바로 이부분이 실시간으로 보이게하는 부분임. 1000ms(1초)마다 실행되도록 함.