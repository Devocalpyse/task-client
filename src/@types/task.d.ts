// @types.task.ts

export interface iTask {
  _id?: number;
  title: string;
  complete?: boolean;
}

export type TaskContextType = {
  tasks: iTask[];
  getTasks: () => Promise<void>;
  createTask: (task: iTask) => Promise<void>;
  toggleTask: (_id: number, status: boolean) => Promise<void>;
  deleteTask: (_id: number) => Promise<void>;
};
