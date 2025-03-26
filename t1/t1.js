// array for todo list
const toDoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

function addTaskToDom(index) {
  const li = document.createElement('li');
  const taskId = 'todo-' + (index + 1);
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', taskId);
  if (toDoList[index].completed) {
    input.checked = true;
  }
  li.appendChild(input);
  li.addEventListener('change', () => {
    toDoList[index].completed = !toDoList[index].completed;
    console.log(toDoList);
  });

  const label = document.createElement('label');
  label.setAttribute('for', taskId);
  label.innerHTML = toDoList[index].task;
  li.appendChild(label);

  const button = document.createElement('button');
  button.innerHTML = 'Del';
  button.addEventListener('click', () => {
    ul.removeChild(li);
    toDoList.splice(index, 1);
    console.log(toDoList);
    renderToDoList();
  });
  li.appendChild(button);
  ul.appendChild(li);
}

function renderToDoList() {
  ul.innerHTML = '';
  for (let i = 0; i < toDoList.length; i++) {
    addTaskToDom(i);
  }
}

const ul = document.querySelector('ul');
renderToDoList();

const addButton = document.querySelector('.add-btn');
const modal = document.querySelector('dialog');
addButton.addEventListener('click', () => {
  modal.showModal();
});

const form = document.querySelector('form');
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  let input = document.querySelector('form input');
  const inputText = input.value.trim();
  if (inputText) {
    const index = toDoList.length;
    toDoList.push({id: index + 1, task: inputText, completed: false});
    addTaskToDom(index);
    console.log(toDoList);
  }
  input.value = '';
  modal.close();
});
