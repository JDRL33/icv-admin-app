import { ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CardVision from "../../components/cardVision";
import CardMision from "../../components/cardMision";
import CardValoresPersonales from "../../components/cardValoresPersonales";
import CardValoresDoctrinales from "../../components/cardValoresDoctrinales";
import TopBar from "../../components/topbar";
import AnunciosList from "../../components/anunciosList";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();

  // estado de la app

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
        }}
      >
        <TopBar title="Columna de la Verdad" subtitle="Inicio" />
        <ScrollView>
          <View>
            <AnunciosList />
            <View style={{ paddingHorizontal: 20 }}>
              <CardVision />
              <CardMision />
              <CardValoresPersonales />
              <CardValoresDoctrinales />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}
