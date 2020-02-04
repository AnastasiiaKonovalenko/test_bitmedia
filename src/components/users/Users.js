import React, { useEffect, useState } from 'react';
import UsersList from '../usersList/usersList';
import { logo, icon, small_logo } from '../../icons/icons';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import UsersPagination from '../usersPagination/UsersPagination';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      width: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();


  const getUsers = () => fetch(`https://obscure-temple-70239.herokuapp.com/pagination/?page=${currentPage}&limit=${pageCount}`, { method: 'GET' })
    .then((response) => response.json())
    .catch(() => 'Something went wrong');

  useEffect(() => {

    async function loadData() {
      const [
        usersFromServer,
      ] = await Promise.all([
        getUsers(),
      ]);

      setUsers(usersFromServer.users);
      setPages(usersFromServer.pages);
      setIsLoading(false);
    }
    loadData();

  }, [currentPage, pageCount]);

  const handleChange = (event) => {
    setPageCount(event.target.value);
  };

  return(
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
                <p className="users__user_statistics">
                  User statistics
                </p>
              </div>

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Users on a page</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={pageCount}
                  onChange={handleChange}
                >
                  <MenuItem defaultValue value={15} onChange={handleChange}>15</MenuItem>
                  <MenuItem value={20} onChange={handleChange}>20</MenuItem>
                  <MenuItem value={30} onChange={handleChange}>30</MenuItem>
                  <MenuItem value={40} onChange={handleChange}>40</MenuItem>
                  <MenuItem value={50} onChange={handleChange}>50</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="users__container">
              <h1 className="users__heading">Users statistics</h1>
              <section className="users__table table">
                <div className='table__heading'>Id</div>
                <div className='table__heading'>First name</div>
                <div className='table__heading'>Last name</div>
                <div className='table__heading'>Email</div>
                <div className='table__heading'>Gender</div>
                <div className='table__heading'>IP address</div>
                <div className='table__heading'>Total clicks</div>
                <div className='table__heading'>Total page views</div>

                <UsersList users={users} />

              </section>

              <UsersPagination
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </main>
          <footer className="users__footer footer">
            {small_logo}
            <p>All rights reserved by ThemeTags</p>
            <p>Copyrights &copy; 2019. </p>
          </footer>
        </section>
      )}
    </>

    );
};

export default Users;
