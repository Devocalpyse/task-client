import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { iTask, TaskContextType } from '../@types/task';

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: any) => {
  const baseURL = process.env.TEST_API_URL;
  const [tasks, setTasks] = useState<iTask[]>([]);

  useEffect(() => {});

  // GET all tasks
  async function getTasks() {
    const response = await axios.get(`${baseURL}/tasks`);
    setTasks(response.data);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
      }}>
      {children}
    </TaskContext.Provider>
  );
};
