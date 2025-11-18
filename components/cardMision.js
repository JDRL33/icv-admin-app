import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

function CardMision({ props }) {
  return (
    <Card style={{ marginBottom: 30 }}>
      <Card.Content>
        <Text style={styles.title} variant="titleLarge">
          Misión
        </Text>
        <Text variant="bodyMedium">
          Ante los grandes desafíos que nos propone nuestra generación, es
          necesario entender que sólo serán superados utilizando los recursos
          que nos dejo nuestro Señor Jesucristo, la iglesia cristiana en Cojímar
          los asumirá con la siempre viviente Palabra de Dios, el Poder del
          Espíritu Santo y la diligente dedicación a la enseñanza efectiva de
          las Verdades Eternas de Dios.
        </Text>
      </Card.Content>
    </Card>
  );
}

export default CardMision;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});
