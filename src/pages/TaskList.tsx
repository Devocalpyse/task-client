import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import DialogButton from '../components/DialogButton';

const TaskList: React.FC = () => {
  return (
    <IonPage>
      <h1>Some content</h1>
      <DialogButton />
    </IonPage>
  );
};

export default TaskList;
