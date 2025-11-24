import { ScrollView, StyleSheet, View } from "react-native";
import AnunciosList from "../../components/anunciosList";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import TopBar from "../../components/topbar";
import { Card, Text, TextInput } from "react-native-paper";

function Edit() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View style={{ paddingTop: insets.top }}>
        <View style={{}}>
          <TopBar title={"Columna de la Verdad"} subtitle={"Edición"} />
        </View>
        <ScrollView>
          <View>
            <AnunciosList edit={true} />
            <Card
              style={{
                marginHorizontal: 30,
                marginBottom: 30,
                paddingHorizontal: 20,
              }}
            >
              <Card.Content>
                <Text variant="displaySmall">Visión</Text>
                <TextInput
                  mode="outlined"
                  numberOfLines={8}
                  style={{ padding: 10 }}
                  multiline={true}
                />
              </Card.Content>
            </Card>
            <Card
              style={{
                marginHorizontal: 30,

                paddingHorizontal: 20,
              }}
            >
              <Card.Content>
                <Text variant="displaySmall">Misión</Text>
                <TextInput
                  mode="outlined"
                  numberOfLines={8}
                  style={{ padding: 10 }}
                  multiline={true}
                />
              </Card.Content>
            </Card>
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

export default Edit;

const styles = StyleSheet.create({});
