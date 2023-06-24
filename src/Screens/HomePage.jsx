import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);

      console.log("getTodos");
    };
    getTodos();
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
