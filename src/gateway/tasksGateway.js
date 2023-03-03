const baseUrl = 'https://6384c3013fa7acb14fffc5eb.mockapi.io/tasks';

export const fetchEvents = () =>
  fetch(baseUrl).then(res => {
    if (!res.ok) {
      alert("Internal Server Error. Can't display events");
      return [];
    }
    return res.json();
  });

export const onCreateTask = taskInfo =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskInfo),
  }).then(res => {
    if (!res.ok) {
      alert("Internal Server Error. Can't display events");
      throw new Error('Network error');
    }
  });

export const onDeleteTask = id =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(res => {
    if (!res.ok) {
      alert("Internal Server Error. Can't display events");
      throw new Error('Network error');
    }
  });
