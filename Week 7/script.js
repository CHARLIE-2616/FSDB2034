document.getElementById('taskForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const taskData = {
      courseId: document.getElementById('courseId').value,
      taskName: document.getElementById('taskName').value,
      dueDate: document.getElementById('dueDate').value,
      details: document.getElementById('details').value
  };

  try {
      const response = await fetch('http://localhost:5000/tasks', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(taskData)
      });

      if (response.ok) {
          alert('Task added successfully');
      } else {
          alert('Failed to add task');
      }
  } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the task');
  }
});
