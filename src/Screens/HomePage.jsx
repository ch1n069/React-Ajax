import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response);
    // const users = await response.json();
    setUsers(response.data);
  };

  return (
    <ul>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

export default HomePage;
