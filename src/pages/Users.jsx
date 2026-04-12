import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const { username } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      const foundUser = data.find(
        (u) => u.username.toLowerCase() === username.toLowerCase()
      );

      setUser(foundUser || null);
    }

    fetchUser();
  }, [username]);

  return (
    <div>
      <Link to="/">Go Back</Link>

      {user ? (
        <>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.username}</p>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

export default Users;