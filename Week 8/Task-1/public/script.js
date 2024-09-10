document.getElementById('taskForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  const courseId = document.getElementById('courseId').value;
  const taskName = document.getElementById('taskName').value;
  const dueDate = document.getElementById('dueDate').value;

  const task = { courseId, taskName, dueDate };

  // Send data to the backend
  const response = await fetch('/addTask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
  });

  if (response.ok) {
      alert('Task added successfully!');
  } else {
      alert('Failed to add task.');
  }
});

async function fetchAllTasks() {
  try {
    const response = await fetch('/tasks');
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    const tasks = await response.json();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    if (tasks.length === 0) {
      taskList.innerHTML = '<li>No tasks found</li>';
    } else {

      tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `Course ID: ${task.courseId} | Task: ${task.taskName} | Due Date: ${task.dueDate}`;
        taskList.appendChild(li);
      });
    }
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
}
fetchAllTasks();