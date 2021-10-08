const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null) {  //null값이니까 로그인하기
    loginForm.classList.remove(HIDDEN_CLASSNAME); //히든기능을 없앰으로써 로그인폼 보여주기
    loginForm.addEventListener("submit", onLoginSubmit); //18번
} else{
    paintGreetings(savedUsername); //로그인한거 보여주기 26번
    // show the greetings 저장된 유저네임보여주기! 새로고침해도 기억하고있음
}

function onLoginSubmit(event) { //로그인하기
  event.preventDefault(); //브라우저의 기본동작을 막아줌. 그 동작은 페이지 새로고침
  loginForm.classList.add(HIDDEN_CLASSNAME); //로그인폼을 숨기기위해 히든추가
  const userWroteName = loginInput.value; //input으로부터 가져옴
  localStorage.setItem("USERNAME_KEY", userWroteName); //username값을 KEY값과 함께 LocalStorage에 저장
  paintGreetings(userWroteName); //paintGreetings함수 호출
}

function paintGreetings(username){ // h1의 내용을 채워줌. h1 id가 greeting이기 때문!!
    greeting.innerText = `Welcome, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}