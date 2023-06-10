// @types.task.ts

export interface iTask {
  _id: number;
  title: string;
  complete: boolean;
}

export type TaskContextType = {
  tasks: iTask[];
  getTasks: () => Promise<void>;
  createTask: (task: iTask) => Promise<void>;
  updateTask: (task: iTask) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
};
