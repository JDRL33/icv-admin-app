import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { useInfoStore } from "../../global_State/icv_store";
import { Dropdown } from "react-native-paper-dropdown";
import { View, Platform, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function ModalUpdate() {
  const globalDialogUpdate = useInfoStore((state) => state.globalDialogUpdate);
  const hideDialogUpdate = useInfoStore((state) => state.hideDialogUpdate);
  const fetchAnuncios = useInfoStore((state) => state.fetchAnuncios);
  const updateAnuncio = useInfoStore((state) => state.updateAnuncio);

  const [valueDay, setValueDay] = useState("");
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  //TimePicker---------------------------------------------------------
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);
  const [firstOpen, setFirstOpen] = useState(true);

  const onChange = (event, selectedTime) => {
    setFirstOpen(false);
    setShow(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };
  const showTimepicker = () => {
    setShow(true);
  };
  //----------------------------------------------------------------------

  const resetCamps = () => {
    setFirstOpen(true);
  };

  const handleSave = async () => {
    if (titleText && descriptionText && valueDay) {
      await updateAnuncio(
        globalDialogUpdate.id,
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

    hideDialogUpdate();
    fetchAnuncios();

    console.log(valueDay);
  };

  useEffect(() => {
    console.log("modal renderizada");
    setTitleText(globalDialogUpdate.name);
    setDescriptionText(globalDialogUpdate.description);
    setValueDay(globalDialogUpdate.day);
  }, [globalDialogUpdate]);

  return (
    <Portal>
      <Dialog visible={globalDialogUpdate.visible} onDismiss={hideDialogUpdate}>
        <Dialog.Icon icon={"plus-circle-multiple-outline"} />
        <Dialog.Title style={{ textAlign: "center" }}>
          {"Editar Anuncio"}
        </Dialog.Title>
        <Dialog.Content style={{ gap: 10 }}>
          <TextInput
            mode="outlined"
            label={"Título del anuncio"}
            placeholder="Culto dominical"
            placeholderTextColor={"#afafafff"}
            value={titleText}
            onChange={(e) => setTitleText(e.nativeEvent.text)}
            autoComplete="off"
            autoCorrect={false}
            spellCheck={false}
          />
          <TextInput
            mode="outlined"
            label={"Descripción del anuncio"}
            placeholder="Dia para encontrarnos juntos y en armonía."
            placeholderTextColor={"#afafafff"}
            multiline={true}
            numberOfLines={5}
            value={descriptionText}
            onChange={(e) => setDescriptionText(e.nativeEvent.text)}
            autoComplete="off"
            autoCorrect={false}
            spellCheck={false}
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
            {firstOpen
              ? globalDialogUpdate.hours
              : time.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
          </Button>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() => {
              hideDialogUpdate();
              resetCamps();
            }}
          >
            {"Cancelar"}
          </Button>
          <Button
            disabled={false}
            onPress={async () => {
              handleSave();
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
export default ModalUpdate;
