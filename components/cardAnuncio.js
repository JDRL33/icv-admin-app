import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

function CardAnuncio({ props, name, description, day, hours }) {
  return (
    <View style={styles.card_outline} {...props}>
      <Card style={{ height: 400 }}>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Content>
          <Text style={styles.card_title} variant="titleLarge">
            {name}
          </Text>
          <View style={styles.card_subtitle}>
            <Text style={{ fontWeight: "bold" }} variant="titleMedium">
              {day}
            </Text>
            <Text variant="titleMedium">{hours}</Text>
          </View>
          <Text variant="bodyMedium">{description.slice(0, 100)}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

export default CardAnuncio;

const styles = StyleSheet.create({
  card_outline: {
    padding: 10,
    paddingVertical: 40,
    width: 350,
  },
  card_title: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  card_subtitle: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
});
