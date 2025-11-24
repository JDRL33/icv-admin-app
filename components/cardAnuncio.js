import { StyleSheet, View } from "react-native";
import { IconButton, Card, Text, MD3Colors } from "react-native-paper";

function CardAnuncio({
  props,
  id,
  name,
  description,
  day,
  hours,
  edit = false,
  showDialogDelete,
  showDialogUpdate,
}) {
  return (
    <>
      {!edit && (
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
              <Text variant="bodyMedium">{description.slice(0, 250)}</Text>
            </Card.Content>
          </Card>
        </View>
      )}
      {edit && (
        <View style={styles.card_outline} {...props}>
          <Card style={{ height: 400 }}>
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.card_title} variant="titleLarge">
                  {name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <IconButton
                    icon="circle-edit-outline"
                    iconColor={MD3Colors.primary20}
                    size={20}
                    onPress={() => {
                      showDialogUpdate(id);
                    }}
                  />
                  <IconButton
                    icon="delete-empty-outline"
                    iconColor={"red"}
                    size={20}
                    onPress={() => showDialogDelete()}
                  />
                </View>
              </View>
              <View style={styles.card_subtitle}>
                <Text style={{ fontWeight: "bold" }} variant="titleMedium">
                  {day}
                </Text>
                <Text variant="titleMedium">{hours}</Text>
              </View>
              <Text variant="bodyMedium">{description.slice(0, 250)}</Text>
            </Card.Content>
          </Card>
        </View>
      )}
    </>
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
