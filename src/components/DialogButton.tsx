import { IonButton } from '@ionic/react';
import { useDialog } from '../hooks/useDialog';
import { useContext } from 'react';
import { TaskContext } from '../providers/TaskProvider';
import { iTask } from '../@types/task';

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
    <IonButton color='primary' onClick={handlePrompt}>
      Create Task
    </IonButton>
  );
};

export default DialogButton;
