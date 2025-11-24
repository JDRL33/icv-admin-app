import { Button, Text, Dialog, Portal } from "react-native-paper";
import { useInfoStore } from "../../global_State/icv_store";

const ModalDelete = ({}) => {
  const globalDialogDelete = useInfoStore((state) => state.globalDialogDelete);
  const hideDialogDelete = useInfoStore((state) => state.hideDialogDelete);

  return (
    <Portal>
      <Dialog
        visible={globalDialogDelete.visible}
        onDismiss={globalDialogDelete.onDismiss}
      >
        <Dialog.Icon icon={globalDialogDelete.icon} />
        <Dialog.Title>{globalDialogDelete.title}</Dialog.Title>
        <Dialog.Content>
          <Text>{globalDialogDelete.message}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() => {
              hideDialogDelete();
            }}
          >
            {globalDialogDelete.textCancel}
          </Button>
          <Button
            onPress={async () => {
              globalDialogDelete.onConfirm();
            }}
          >
            {globalDialogDelete.textConfirm}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ModalDelete;
