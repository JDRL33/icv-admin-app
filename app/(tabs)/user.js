import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import TopBar from "../../components/topbar";
import { useState } from "react";
import { View, Button, Platform, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function User() {
  const insets = useSafeAreaInsets();
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

  return (
    <SafeAreaProvider>
      <View style={{ paddingTop: insets.top }}>
        <View style={{}}>
          <TopBar title={"Columna de la Verdad"} subtitle={"Usuario"} />
        </View>
        <View style={{ padding: 20 }}>
          <Button onPress={showTimepicker} title="Seleccionar hora" />

          <Text style={{ marginTop: 10 }}>
            Hora seleccionada:{" "}
            {time.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </Text>

          {show && (
            <DateTimePicker
              value={time}
              mode="time"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onChange}
              is24Hour={false} // Esto fuerza el formato de 12 horas
            />
          )}
        </View>
      </View>
    </SafeAreaProvider>
  );
}

export default User;
