import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

function CardVision() {
  return (
    <Card style={{ marginBottom: 30 }}>
      <Card.Content>
        <Text style={styles.title} variant="titleLarge">
          Visión
        </Text>
        <Text variant="bodyMedium">
          Su mandato es nuestra misión (Mateo 28:18-20), somos una iglesia sin
          paredes, enfocadas en el servicio a la comunidad, somos una iglesia
          Cristocéntrica Misionera y Pentecostal. Comprometida con los
          principios del Reino, conservadora de la sana doctrina. Que sirve con
          amor al prójimo y espera el advenimiento del Señor Jesucristo.
        </Text>
      </Card.Content>
    </Card>
  );
}

export default CardVision;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});
