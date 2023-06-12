import { Dialog } from '@capacitor/dialog';

export const useDialog = async (title: string, message: string) => {
  const { value } = await Dialog.prompt({
    title,
    message,
  });

  return value;
};
