import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  useHistory,
  useLocation,
} from 'react-router-dom';


const UsersList = ({ users }) => {
  const location = useLocation();
  const history = useHistory();

  new URLSearchParams(location.search);

  const handleUser = (user) => {
    history.push({
      pathname: `/statistic/${user.id}/${user.first_name.replace(/\s/g, '_').toLowerCase()}_${user.last_name.replace(/\s/g, '_').toLowerCase()}`,
      search: location.search,
      id: user.id,
    });
  };

  return(
    <>
      {users.map(user =>
        <React.Fragment
          key={user.id}
        >
          <Link
            onClick={() => handleUser(user)}
            to={`/statistic/${user.first_id}/${user.first_name.replace(/\s/g, '_').toLowerCase()}_${user.last_name.replace(/\s/g, '_').toLowerCase()}`}
            className={user.id % 2 === 0
              ? 'table__item link'
              : 'table__item table__item_grey link'
            }
          >
            {user.id}
          </Link>

          <Link
            onClick={() => handleUser(user)}
            to={`/statistic/${user.id}/${user.first_name.replace(/\s/g, '_').toLowerCase()}_${user.last_name.replace(/\s/g, '_').toLowerCase()}`}
            className={user.id % 2 === 0
              ? 'table__item link'
              : 'table__item table__item_grey link'
            }
          >
            {user.first_name}
          </Link>

          <Link
            onClick={() => handleUser(user)}
            to={`/statistic/${user.id}/${user.first_name.replace(/\s/g, '_').toLowerCase()}_${user.last_name.replace(/\s/g, '_').toLowerCase()}`}
            className={user.id % 2 === 0
              ? 'table__item link'
              : 'table__item table__item_grey link'
            }
          >
            {user.last_name}
          </Link>

          <Link
            onClick={() => handleUser(user)}
            to={`/statistic/${user.id}/${user.first_name.replace(/\s/g, '_').toLowerCase()}_${user.last_name.replace(/\s/g, '_').toLowerCase()}`}
            className={user.id % 2 === 0 ? 'table__item link' : 'table__item table__item_grey link'}
          >
            {user.email}
          </Link>

          <Link
            onClick={() => handleUser(user)}
            to={`/statistic/${user.id}/${user.first_name.replace(/\s/g, '_').toLowerCase()}_${user.last_name.replace(/\s/g, '_').toLowerCase()}`}
            className={user.id % 2 === 0
              ? 'table__item link'
              : 'table__item table__item_grey link'
            }
          >
            {user.gender}
          </Link>

          <Link
            onClick={() => handleUser(user)}
            to={`/statistic/${user.id}/${user.first_name.replace(/\s/g, '_').toLowerCase()}_${user.last_name.replace(/\s/g, '_').toLowerCase()}`}
            className={user.id % 2 === 0
              ? 'table__item link'
              : 'table__item table__item_grey link'
            }
          >
            {user.ip_address}
          </Link>

          <Link
            onClick={() => handleUser(user)}
            to={`/statistic/${user.id}/${user.first_name.replace(/\s/g, '_').toLowerCase()}_${user.last_name.replace(/\s/g, '_').toLowerCase()}`}
            className={user.id % 2 === 0
              ? 'table__item link'
              : 'table__item table__item_grey link'
            }
          >
            {user.total_clicks}
          </Link>

          <Link
            onClick={() => handleUser(user)}
            to={`/statistic/${user.id}/${user.first_name.replace(/\s/g, '_').toLowerCase()}_${user.last_name.replace(/\s/g, '_').toLowerCase()}`}
            className={user.id % 2 === 0
              ? 'table__item link'
              : 'table__item table__item_grey link'
            }
          >
            {user.total_views}
          </Link>

        </React.Fragment>
      )}
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string,
    gender: PropTypes.string,
    ip_address: PropTypes.string,
  }))
};

UsersList.defaultProps = {
  email: '',
  gender: '',
  ip_address: '',
};

export default UsersList;
