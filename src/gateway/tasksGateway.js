const baseUrl = 'https://6384c3013fa7acb14fffc5eb.mockapi.io/tasks';

export const updateFromServer = () =>
  fetch(baseUrl).then((res) =>
    res.ok ? res.json() : new Error('Network Error')
  );

export const onCreateTask = (taskInfo) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskInfo),
  }).then((res) => {
    if (!res.ok) throw new Error('Network error');
  });

export const onDeleteTask = (id) =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then((res) => {
    if (!res.ok) throw new Error('Network error');
  });
