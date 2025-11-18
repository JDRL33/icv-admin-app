import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

function CardValoresDoctrinales() {
  return (
    <Card style={{ marginBottom: 30 }}>
      <Card.Content>
        <Text style={styles.title} variant="titleLarge">
          Valores Doctrinales de la Iglesia
        </Text>
        <View style={{ flexDirection: "column", gap: 8 }}>
          <Text>
            1. Valoramos la Biblia como la Palabra de Dios que norma nuestra fe
            y conducta.
          </Text>
          <Text>
            2. Valoramos la adoración como un estilo de vida y nuestra meta
            suprema.
          </Text>
          <Text>
            3. Valoramos la salvación de las almas a través de la predicación
            del evangelio.
          </Text>
          <Text>
            4. Valoramos el discipulado como el instrumento para alcanzar
            crecimiento y la madurez cristiana.
          </Text>
          <Text>
            5. Valoramos el amor fraternal como la expresión auténtica de la
            familia de Dios que somos.
          </Text>
          <Text>
            6. Valoramos el servicio cristiano como evidencia del amor de Dios.
          </Text>
          <Text>
            7. Valoramos el sentido de pertenencia y compromiso como fundamento
            de la unidad en Cristo.
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
}

export default CardValoresDoctrinales;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});
