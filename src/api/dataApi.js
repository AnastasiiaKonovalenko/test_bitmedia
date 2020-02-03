export const getUsers = () => fetch(`http://localhost:5000/pagination/?page=8&limit=10`, { method: 'GET' })
  .then((response) => response.json())
  .catch(() => 'Something went wrong');

export const getStatistic = () => fetch('http://localhost:5000/statistic/users_statistic.json')
  .then((response) => response.json())
  .catch(() => 'Something went wrong');
