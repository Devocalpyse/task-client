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
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  const markOrUnmarkTask: CheckboxChangeEventDetail['value'] = async (
    _id: number,
    status: boolean
  ) => {
    toggleTask(_id, status);
  };

  const handleDelete = async (_id: number) => {
    deleteTask(_id);
  };

  function generateTasks() {
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
