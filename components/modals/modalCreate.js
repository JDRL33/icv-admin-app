import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { useInfoStore } from "../../global_State/icv_store";
import { useState } from "react";
import { Dropdown } from "react-native-paper-dropdown";
import { View, Platform, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function ModalCreate() {
  const [valueDay, setValueDay] = useState("");
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  //TimePicker---------------------------------------------------------
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);
  const onChange = (event, selectedTime) => {
    setShow(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };
  const showTimepicker = () => {
    setShow(true);
  };
  //----------------------------------------------------------------------

  const globalDialogCreate = useInfoStore((state) => state.globalDialogCreate);
  const hideDialogCreate = useInfoStore((state) => state.hideDialogCreate);
  const insertAnuncio = useInfoStore((state) => state.insertAnuncio);
  const fetchAnuncios = useInfoStore((state) => state.fetchAnuncios);

  const resetCamps = () => {
    setValueDay("");
    setTitleText("");
    setDescriptionText("");
  };

  const handleSave = () => {
    if (titleText && descriptionText && valueDay) {
      insertAnuncio(
        titleText,
        valueDay,
        time
          .toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
          .toString(),
        descriptionText,
        "image_url"
      );
      resetCamps();
    } else {
      console.log("error");
    }
  };

  return (
    <Portal>
      <Dialog visible={globalDialogCreate.visible} onDismiss={hideDialogCreate}>
        <Dialog.Icon icon={"plus-circle-multiple-outline"} />
        <Dialog.Title style={{ textAlign: "center" }}>
          {"Añadir Anuncio"}
        </Dialog.Title>
        <Dialog.Content style={{ gap: 10 }}>
          <TextInput
            mode="outlined"
            label={"Título del anuncio"}
            placeholder="Culto dominical"
            placeholderTextColor={"#afafafff"}
            // value={titleText}
            onChangeText={setTitleText}
          />
          <TextInput
            mode="outlined"
            label={"Descripción del anuncio"}
            placeholder="Dia para encontrarnos juntos y en armonía."
            placeholderTextColor={"#afafafff"}
            multiline={true}
            numberOfLines={5}
            // value={}
            onChangeText={setDescriptionText}
          />
          <Dropdown
            label="Día de la Semana"
            value={valueDay}
            onSelect={setValueDay}
            options={[
              {
                value: "Domingo",
                label: "Domingo",
              },
              {
                value: "Lunes",
                label: "Lunes",
              },
              {
                value: "Martes",
                label: "Martes",
              },
              {
                value: "Miercoles",
                label: "Miercoles",
              },
              {
                value: "Jueves",
                label: "Jueves",
              },
              {
                value: "Viernes",
                label: "Viernes",
              },
              {
                value: "Sabado",
                label: "Sabado",
              },
            ]}
          />
          <Button
            style={{ borderRadius: 10 }}
            icon="watch"
            mode="contained"
            onPress={showTimepicker}
          >
            {time.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </Button>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() => {
              hideDialogCreate();
              resetCamps();
            }}
          >
            {"Cancelar"}
          </Button>
          <Button
            disabled={false}
            onPress={async () => {
              await handleSave();
              hideDialogCreate();
              fetchAnuncios();
            }}
          >
            {"Guardar"}
          </Button>
        </Dialog.Actions>
      </Dialog>

      {show && (
        <DateTimePicker
          value={time}
          mode="time"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChange}
          is24Hour={false} // Esto fuerza el formato de 12 horas
        />
      )}
    </Portal>
  );
}
export default ModalCreate;
