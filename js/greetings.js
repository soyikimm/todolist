const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY", username);
  paintGreetings(username);
}

function paintGreetings(username){ // h1의 내용을 채워줌. h1 id가 greeting이기 때문!!
    greeting.innerText = `Welcome, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null) { 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); // show the form 저장된 유저네임 없으면 입력칸나오게함
} else{
    paintGreetings(savedUsername);
    // show the greetings 저장된 유저네임보여주기! 새로고침해도 기억하고있음
}