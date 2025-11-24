import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import ModalDelete from "../components/modals/modalDelete";
import ModalCreate from "../components/modals/modalCreate";
import ModalUpdate from "../components/modals/modalUpdate";

export default function Layout() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <ModalDelete />
      <ModalCreate />
      <ModalUpdate />
    </PaperProvider>
  );
}
