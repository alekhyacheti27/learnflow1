document.addEventListener('DOMContentLoaded', () => {
  const workoutForm = document.getElementById('workout-form');
  const goalForm = document.getElementById('goal-form');
  const workoutList = document.getElementById('workout-list');
  const goalList = document.getElementById('goal-list');

  workoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const workoutType = document.getElementById('workout-type').value;
      const duration = document.getElementById('duration').value;
      const date = document.getElementById('date').value;

      const workoutItem = document.createElement('li');
      workoutItem.textContent = `${workoutType} - ${duration} minutes on ${date}`;
      workoutList.appendChild(workoutItem);

      workoutForm.reset();
  });

  goalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const goalDescription = document.getElementById('goal-description').value;
      const goalDate = document.getElementById('goal-date').value;

      const goalItem = document.createElement('li');
      goalItem.textContent = `Goal: ${goalDescription} by ${goalDate}`;
      goalList.appendChild(goalItem);

      goalForm.reset();
  });
});
