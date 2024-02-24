
import './App.css';
import { Navbar } from './components/NavBar';
import { TaskCard } from './components/TaskCard';
import axios from 'axios';
import { useEffect, useState } from "react";

function App() {

  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(response => setTaskData(response.data))

  }, [])

  return (
    <div className='w-100 bg-dark'>
      <Navbar />
      <div className='row justify-content-between p-5'>
        {
          taskData.map((item) => (
            <TaskCard props={item} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
