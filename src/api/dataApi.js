export const getUsers = () => fetch('https://obscure-temple-70239.herokuapp.com/pagination/?page=8&limit=10', { method: 'GET' })
  .then((response) => response.json())
  .catch(() => 'Something went wrong');

export const getStatistic = () => fetch('https://obscure-temple-70239.herokuapp.com/statistic/users_statistic.json')
  .then((response) => response.json())
  .catch(() => 'Something went wrong');
