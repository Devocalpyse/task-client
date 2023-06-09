// @types.task.ts

export interface iTask {
  id: number;
  title: string;
  complete: boolean;
}

export type TaskContextType = {
  tasks: iTask[];
  getTasks: () => Promise<void>;
  createTask: (task: iTask) => Promise<void>;
};
