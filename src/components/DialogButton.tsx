import { IonButton, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { useDialog } from '../hooks/useDialog';
import { useContext } from 'react';
import { TaskContext } from '../providers/TaskProvider';
import { iTask } from '../@types/task';
import { add } from 'ionicons/icons';

const DialogButton: React.FC = () => {
  const { showPrompt } = useDialog();
  const { createTask } = useContext(TaskContext);

  const handlePrompt = async () => {
    const newTask = await showPrompt('NEW TASK', 'Create a new task:');
    if (newTask && newTask.trim().length > 0) {
      const result: iTask = {
        title: newTask.trim(),
      };
      createTask(result);
    }
  };

  return (
    <IonFab slot='fixed' vertical='bottom' horizontal='end'>
      <IonFabButton color='primary' onClick={handlePrompt}>
        <IonIcon icon={add} />
      </IonFabButton>
    </IonFab>
  );
};

export default DialogButton;
