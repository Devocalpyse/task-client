import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { iTask, TaskContextType } from '../@types/task';

export const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export const TaskProvider = ({ children }: any) => {
  const baseURL = process.env.TEST_API_URL!;
  const [tasks, setTasks] = useState<iTask[]>([]);

  useEffect(() => {
    getTasks();
  }, []);

  // GET all tasks
  async function getTasks() {
    const response = await axios.get(baseURL);
    setTasks(response.data);
  }

  // POST new task
  async function createTask(task: iTask) {
    await axios.post(baseURL, task);
  }

  // PUT task
  async function updateTask(task: iTask) {
    await axios.put(`${baseURL}/${task._id}`, task);
  }

  // DELETE task
  async function deleteTask(_id: number) {
    await axios.delete(`${baseURL}/${_id}`);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        createTask,
        updateTask,
        deleteTask
      }}>
      {children}
    </TaskContext.Provider>
  );
};
