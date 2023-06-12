import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { TaskContext } from '../providers/TaskProvider';
import { useContext } from 'react';
import { CheckboxChangeEventDetail } from '@ionic/react';
import DialogButton from '../components/DialogButton';
import './TaskList.css';

// Main page for the app, brings in multiple components and parts from the other parts, consolidates, and then generates a complete "task list" app.
const TaskList: React.FC = () => {
  // Get tasks, toggleTask, and deleteTask from TaskContext.
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  /**
   * Async function to mark or unmark a task as complete.
   *
   * @param _id - The ID of the task to mark/unmark.
   * @param status - The new status of the task (true for complete, false for incomplete).
   */
  const markOrUnmarkTask: CheckboxChangeEventDetail['value'] = async (
    _id: number,
    status: boolean
  ) => {
    toggleTask(_id, status);
  };

  // Function to handle the deletion of a task.
  const handleDelete = async (_id: number) => {
    deleteTask(_id);
  };

  // Generate the task list.
  function generateTasks() {
    // Filter tasks based on whether they are complete or incomplete.
    const complete = tasks.filter((task) => task.complete === true);
    const incomplete = tasks.filter((task) => task.complete === false);

    return (
      <IonItemGroup>
        <IonItemDivider color='medium'>
          <IonLabel>TO DO</IonLabel>
        </IonItemDivider>
        {incomplete.map((task) => (
          <IonItemSliding key={task._id}>
            <IonItem>
              <IonCheckbox
                checked={task.complete}
                onIonChange={() => markOrUnmarkTask(task._id, true)}
                justify='space-between'>
                {task.title}
              </IonCheckbox>
            </IonItem>

            <IonItemOptions>
              <IonItemOption onClick={() => handleDelete(task._id!)} color='danger'>
                Delete
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
        <IonItemDivider color='tertiary'>
          <IonLabel>COMPLETE</IonLabel>
        </IonItemDivider>
        {complete.map((task) => (
          <IonItemSliding key={task._id}>
            <IonItem>
              <IonCheckbox
                checked={task.complete}
                onIonChange={() => markOrUnmarkTask(task._id, false)}
                justify='space-between'>
                {task.title}
              </IonCheckbox>
            </IonItem>

            <IonItemOptions>
              <IonItemOption onClick={() => handleDelete(task._id!)} color='danger'>
                Delete
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
      </IonItemGroup>
    );
  }

  // Return the task list.
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle>Tasks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {generateTasks()}
        <DialogButton />
      </IonContent>
    </IonPage>
  );
};

export default TaskList;
