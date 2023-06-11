import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { TaskContext } from '../providers/TaskProvider';
import { useContext } from 'react';
import { CheckboxChangeEventDetail } from '@ionic/react';
import DialogButton from '../components/DialogButton';

const TaskList: React.FC = () => {
  const { tasks, toggleTask } = useContext(TaskContext);

  const markOrUnmarkTask: CheckboxChangeEventDetail['value'] = async (
    _id: number,
    status: boolean
  ) => {
    toggleTask(_id, status);
  };

  function generateTasks() {
    const complete = tasks.filter((task) => task.complete === true);
    const incomplete = tasks.filter((task) => task.complete === false);

    return (
      <IonItemGroup>
        <IonItemDivider>
          <IonLabel>Incomplete</IonLabel>
        </IonItemDivider>
        {incomplete.map((task) => (
          <IonItem key={task._id}>
            <IonCheckbox
              checked={task.complete}
              onIonChange={() => markOrUnmarkTask(task._id, true)}
              justify='space-between'>
              {task.title}
            </IonCheckbox>
          </IonItem>
        ))}
        <IonItemDivider>
          <IonLabel>Complete</IonLabel>
        </IonItemDivider>
        {complete.map((task) => (
          <IonItem key={task._id}>
            <IonCheckbox
              checked={task.complete}
              onIonChange={() => markOrUnmarkTask(task._id, false)}
              justify='space-between'>
              {task.title}
            </IonCheckbox>
          </IonItem>
        ))}
      </IonItemGroup>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List of Tasks</IonTitle>
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
