const taskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');
const template = document.querySelector('.task-item.template');
const clearButton = document.getElementById('clearButton');

document.getElementById('addTask').addEventListener('click', function() {
  const taskText = taskInput.value.trim();
   
  if (taskText === '') {
    alert('Task cannot be empty.');
    taskInput.value = '';
    return;
  }

   // Clone the template 
  const newTask = template.cloneNode(true);
  newTask.classList.remove('template');
  
  // Generăm ID-uri unice pentru butoane
  const uniqueId = `task-${Date.now()}`;
  const editButton = newTask.querySelector('#editButton');
  const deleteButton = newTask.querySelector('#deleteButton');

  editButton.id = `edit-${uniqueId}`;
  deleteButton.id = `delete-${uniqueId}`;
  
  newTask.querySelector('span').textContent = taskText;

  // Adăugăm evenimentele de click pentru butoanele de editare și ștergere
  clearButton.addEventListener ('click', function() {
    taskList.innerHTML = '';
  })
  editButton.addEventListener('click', function() {
    editTask(editButton.id); // Pasăm ID-ul butonului
  });

  deleteButton.addEventListener('click', function() {
    deleteTask(deleteButton.id); // Pasăm ID-ul butonului
  });

  // Adăugăm noua sarcină la listă
  taskList.appendChild(newTask);

  // Golim câmpul de input
  taskInput.value = '';
});

// Funcția de editare a sarcinii
function editTask(buttonId) {
  const taskItem = document.querySelector(`#${buttonId}`).closest('.task-item');
  const taskTextElement = taskItem.querySelector('span');
  const currentText = taskTextElement.textContent;
  const newText = prompt('Edit Task:', currentText);

  if (newText !== null && newText.trim() !== '') {
    taskTextElement.textContent = newText.trim();
  }
}

// Funcția de ștergere a sarcinii
function deleteTask(buttonId) {
  const taskItem = document.querySelector(`#${buttonId}`).closest('.task-item');
  taskList.removeChild(taskItem);
}



