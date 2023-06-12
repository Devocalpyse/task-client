import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { iTask, TaskContextType } from '../@types/task';

export const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export const TaskProvider = ({ children }: any) => {
  const baseURL = 'http://localhost:3000/api/tasks';
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
    getTasks();
  }

  // TOGGLE task
  async function toggleTask(_id: number, status: boolean) {
    await axios.put(`${baseURL}/${_id}`, { complete: status });
    getTasks();
  }

  // DELETE task
  async function deleteTask(_id: number) {
    await axios.delete(`${baseURL}/${_id}`);
    getTasks();
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        createTask,
        toggleTask,
        deleteTask,
      }}>
      {children}
    </TaskContext.Provider>
  );
};
