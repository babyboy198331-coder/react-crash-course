import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../components/User';

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/id"
    );
    setUsers(data);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUsers();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  function renderUsers() {
    return users.map((user) => (
      <Link
        to={`/users/${user.id}`}
        key={user.id}
        style={{
          display: "block",
          textDecoration: "none",
          color: "inherit"
        }}
      >
        <User
          id={user.id}
          name={user.name}
          email={user.email}
          username={user.username}
        />
      </Link>
    ));
  }

  function renderSkeletonLoading() {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {users.length ? renderUsers() : renderSkeletonLoading()}
    </div>
  );
}

export default Home;