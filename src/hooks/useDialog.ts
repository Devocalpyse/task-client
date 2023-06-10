import { Dialog } from '@capacitor/dialog';

const showAlert = async (title: string, message: string) => {
  await Dialog.alert({
    title,
    message,
  });
};

const showConfirm = async (title: string, message: string) => {
  const { value } = await Dialog.confirm({
    title,
    message,
  });

  return value;
};

const showPrompt = async (title: string, message: string) => {
  const { value } = await Dialog.prompt({
    title,
    message,
  });

  return value;
};

export function useDialog() {
  return {
    showAlert,
    showConfirm,
    showPrompt,
  };
}
