const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// To do list 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// To do list 삭제
function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// To do list 보여주기
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; //span의 텍스트는 handleToDoSubmit에서 사용자 준 newTodo값이 됨
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //li는 span이라는 자식을 갖게됨으로 li안에 span있음
  li.appendChild(button);
  toDoList.appendChild(li); //list로 출력해줌
}

function handleToDoSubmit(event) {
  event.preventDefault(); //엔터를 쳤을 때 submit의 기본동작인 페이지 새로고침 막기
  const newTodo = toDoInput.value;  //input의 현재 value를 newTodo라는 새로운 변수에 복사
  toDoInput.value = ""; //빈값 넣어주기
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}