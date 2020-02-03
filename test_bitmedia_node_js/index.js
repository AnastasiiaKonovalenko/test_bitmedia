const express = require('express');
const app = express();
const port = 5000;

app.use((req, res, next) => {
  res.set({'Access-Control-Allow-Origin': '*'});
  next();
});

app.use(express.static('api', {
  index: 'users.json',
  extensions: ['json'],
}));

let users = require('./api/users/users');
let statistic = require('./api/statistic/users_statistic');

app.get('/pagination', (req, res) => {
  const countUsersPerPage = req.query.limit;
  const pageCount = Math.ceil(users.length / countUsersPerPage);
  const pages = (new Array(pageCount)).fill(1).map((a,i)=>i+1);
  let page = parseInt(req.query.page);
  if (!page) { page = 1;}
  if (page > pageCount) {
    page = pageCount
  }
  res.json({
    "page": page,
    "pages": pages,
    "pageCount": pageCount,
    'users': users.slice(page * countUsersPerPage - countUsersPerPage, page * countUsersPerPage).map(item => {
      return {
        ...item,
        statistic: statistic.filter(user => user.user_id === item.id),
        total_clicks: statistic.filter(user => user.user_id === item.id).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.clicks;
        }, 0),
        total_views: statistic.filter(user => user.user_id === item.id).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.page_views;
        }, 0),
      }
    }),
  });

});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
