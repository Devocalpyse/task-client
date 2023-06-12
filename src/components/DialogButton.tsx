import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { useDialog } from '../hooks/useDialog';
import { useContext } from 'react';
import { TaskContext } from '../providers/TaskProvider';
import { add } from 'ionicons/icons';

/**
 * Renders a button component that triggers a prompt to create a new task when clicked.
 *
 * @returns {React.FC} A React functional component.
 */
const DialogButton: React.FC = () => {
  const { createTask } = useContext(TaskContext);

  // Handles a prompt request, and upon submission, creates a new task. The task must be non-zero in length to pass the if statement.
  const handlePrompt = async () => {
    const newTask = await useDialog('NEW TASK', 'Create a new task:');
    if (newTask?.trim()) {
      createTask({ title: newTask.trim() });
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
