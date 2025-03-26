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

const ul = document.querySelector('ul');
for (let i = 0; i < toDoList.length; i++) {
  const li = document.createElement('li');
  const taskId = 'todo-' + (i + 1);
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', taskId);
  if (toDoList[i].completed) {
    input.checked = true;
  }
  li.appendChild(input);
  li.addEventListener('change', () => {
    toDoList[i].completed = !toDoList[i].completed;
    console.log(toDoList);
  });
  const label = document.createElement('label');
  label.setAttribute('for', taskId);
  label.innerHTML = toDoList[i].task;
  li.appendChild(label);

  const button = document.createElement('button');
  button.innerHTML = 'Del';
  button.addEventListener('click', () => {
    ul.removeChild(li);
    toDoList.splice(i, 1);
    console.log(toDoList);
  });
  li.appendChild(button);
  ul.appendChild(li);
}
