import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

function CardValoresPersonales() {
  return (
    <Card style={{ marginBottom: 30 }}>
      <Card.Content>
        <Text style={styles.title} variant="titleLarge">
          Valores Personales de la Iglesia
        </Text>
        <View style={{ flexDirection: "column", gap: 8 }}>
          <Text>
            HACEMOS LO QUE SEA NECESARIO. ¡Sin excusas! La importancia de
            nuestra misión trasciende la descripción de un puesto. Nadie dice:
            ¡Ese no es mi trabajo! Cualquier problema es de todos.
          </Text>
          <Text>
            MUESTRA TU PASIÓN. Las personas con pasión hacen que las cosas
            sucedan. Es un estilo de vida, es nuestra meta. Pasión por Cristo,
            por su presencia, por el prójimo.
          </Text>
          <Text>
            AMAMOS A NUESTRA IGLESIA. Nos encanta esta iglesia, amamos la gente
            que nos rodea, tú eres mi hermano.
          </Text>
          <Text>
            NUNCA DEJA DE CRECER. Personalmente, profesionalmente y
            espiritualmente. Los seres vivos crecen, la iglesia crece y se
            perfecciona.
          </Text>
          <Text>
            DAMOS HONOR ARRIBA, ABAJO Y A NUESTRO ALREDEDOR.Somos conocidos como
            personas de honor que dan honor libremente. Construimos en lugar de
            derribar, sumamos y multiplicamos en lugar de restar y dividir.
            Tratamos a las personas mejor de lo que merecen.
          </Text>
          <Text>
            LA IGLESIA ES DIVERTIDA. ¡Nos divierte estar cerca! Encontramos
            alegría en cada circunstancia.
          </Text>
          <Text>
            LO QUE HACEMOS, LO HACEMOS ATRACTIVO. Las personas se sienten
            atraídas por Jesús y deberían ser atraídas por el CAMINO que les
            presentamos, dejamos con ganas de más. Hacemos del evangelio un
            estilo de vida atractivo, siendo para todos irresistibles. Dales
            algo de que hablar.
          </Text>
          <Text>
            RECHAZA EL BIEN POR LA EXCELENCIA. Dios merece lo mejor de nosotros,
            incluso si toma más tiempo o requiere más energía. No nos
            conformamos con lo suficientemente bueno.
          </Text>
          <Text>
            LIDERA DESDE EL FRENTE. La gente te está mirando, muéstrales el
            camino. La gente no puede seguirte a un lugar al que tú no irás. Sé
            el primero en moverte.
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
}

export default CardValoresPersonales;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});
