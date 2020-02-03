import React, { useEffect, useState } from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import {
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import { icon, logo, small_logo } from '../../icons/icons';
import CustomizedAxisTick from './customizedLables';

const Statistic = () => {
  const [statistic, setStatistic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState('');
  const history = useHistory();
  const path = history.location.pathname.split('/');
  const id_param = +path[2];
  const name = path[3].split('_');

  const getStatistic = () => fetch('http://localhost:5000/statistic/users_statistic.json')
    .then((response) => response.json())
    .catch(() => 'Something went wrong');

  useEffect(() => {
    async function loadData() {
      const [
        statisticFromServer,
      ] = await Promise.all([
        getStatistic(),
      ]);
      setId(id_param);
      setStatistic(statisticFromServer.filter(item => item.user_id === id).map(item => {
        const dateFormat = (date) => {
          let months = ['Jen', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          let month = new Date(date).getMonth();
          let day = new Date(date).getDate().toString();
          let year = new Date(date).getFullYear().toString();
          return(months[month]  + ', ' + day + ' ' +  year);
        };
        return {
          ...item,
          date: dateFormat(item.date),
        }
      }));
      setIsLoading(false);
    }

    loadData();

  }, [id]);

  return (
    <>
      {isLoading ? (
        <section className="section_spinner">
          <div className="spinner"/>
        </section>
      ) : (
        <section className="users">
          <header className="users__header">
            <div className="users__logo">{logo}</div>
          </header>
          <main className='main users__main'>
            <div className="users__links_block">
              <div className="users__links">
                <Link
                  to="/"
                  className="users__main_page">
                  Main page
                </Link>
                <div className="icon">{icon}</div>
                <Link
                  to="/users"
                  className="users__main_page"
                >
                    Users statistic
                 </Link>
                <div className="icon">{icon}</div>
                <p className="users__user_statistics">
                  {`${name[0]} ${name[1]}`}
                </p>

              </div>
            </div>

            <div className="users__container">
              <h1 className="users__heading">Users statistics</h1>
            </div>
            <h2 className="heading">Clicks</h2>

            <ResponsiveContainer
              aspect={10.0/3.0}
              width='100%'>
              <LineChart data={statistic}
                         margin={{top: 5, right: 30, left: 20, bottom: 45}}>
                <XAxis
                  dataKey="date"
                  tick={<CustomizedAxisTick />}
                />
                <YAxis/>
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3"/>
                <Line
                  dataKey="clicks"
                  type="monotone"
                  stroke="#3A80BA"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>

            <h2 className="heading page_views">Page views</h2>
            <ResponsiveContainer
              className='graph_views'
              aspect={10.0/3.0}
              width='100%'>
              <LineChart
                data={statistic}
                margin={{top: 5, right: 30, left: 20, bottom: 45}}
              >
                <XAxis
                  dataKey="date"
                  tick={<CustomizedAxisTick />}
                />
                <YAxis/>
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3"/>
                <Line
                  dataKey="page_views"
                  type="monotone"
                  stroke="#3A80BA"
                  strokeWidth={2}
                 />
              </LineChart>
            </ResponsiveContainer>

          </main>
          <footer className="users__footer footer">
            {small_logo}
            <p>All rights reserved by ThemeTags</p>
            <p>Copyrights &copy; 2019. </p>
          </footer>
        </section>
      )}
    </>
  )};

export default Statistic;
