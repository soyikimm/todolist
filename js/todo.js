const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// To do list 로컬 스토리지에 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// To do list 삭제
function deleteToDo(event) {
  const li = event.target.parentElement; // parentElement는 event.target의 부모를 찾아줌. 어떤 li를 클릭했는지 알수있음.
  li.remove(); //Button의 부모는 li임. 클릭한 li 지우기
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// To do list 저장해서 보여주기
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; //span의 텍스트는 handleToDoSubmit에서 사용자 준 newTodo값이 됨. 투두리스트가 여기들어감
  const button = document.createElement("button"); //삭제버튼
  button.innerText = "X";
  button.addEventListener("click", deleteToDo); //버튼이 클릭되면 deleteTodo를 실행 (15번)
  li.appendChild(span); //li는 span이라는 자식을 갖게됨으로 li안에 span있음
  li.appendChild(button);
  toDoList.appendChild(li); //<button>을 <li>로 감싸며 출력해줌
}

//To do list 추가
function handleToDoSubmit(event) {
  event.preventDefault(); //엔터를 쳤을 때 submit의 기본동작인 페이지 새로고침 막기
  const newTodo = toDoInput.value;  //input의 현재 value를 newTodo라는 새로운 변수에 복사
  toDoInput.value = ""; //빈값 넣어주기
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //toDos array를 가져와서 newTodo를 Push
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); //사용자가 form을 submit하면 빈값을 넣고 newTodo를 toDos array에 push
const savedToDos = localStorage.getItem(TODOS_KEY); //로컬에 투두리스트저장

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}