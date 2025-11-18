import { useEffect, useState } from "react";
import { StyleSheet, View, useWindowDimensions, FlatList } from "react-native";
import { Text, Divider } from "react-native-paper";
import { supabase } from "../services/supabase";
import CardAnuncio from "./cardAnuncio";

const AnunciosList = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("ads").select("*");
        if (error) throw error;
        setAds(data);
      } catch (error) {
        setAds([]);
        throw new Error(error);
      } finally {
        setLoading(false);
      }
      // setAds([
      //   {
      //     id: 2,
      //     name: "fgergerg",
      //     description: "drhrtjrtyjryjehrethrethjurtj",
      //     day: "hodgfeerges",
      //     hours: "thsthe",
      //   },
      //   {
      //     id: 1,
      //     name: "fgergerg",
      //     description: "drhrtjrtyjryjehrethrethjurtj",
      //     day: "hodgfeerges",
      //     hours: "thsthe",
      //   },
      //   {
      //     id: 3,
      //     name: "fgergerg",
      //     description:
      //       "drhrtjrtyjryjehrethrethjurtj drhrtjrtyjryjehrethrethjurtj drhrtjrtyjryjehrethrethjurtj drhrtjrtyjryjehrethrethjurtj",
      //     day: "hodgfeerges",
      //     hours: "thsthe",
      //   },
      // ]);
    };
    fetchAds();
  }, []);

  return (
    <>
      <View style={{ paddingHorizontal: 20 }}>
        <Text variant="titleLarge">Anuncios</Text>
        <Divider bold={true} />
      </View>
      <FlatList
        data={ads}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={(anuncio) => (
          <CardAnuncio
            key={anuncio.item.id}
            name={anuncio.item.name}
            day={anuncio.item.day}
            description={anuncio.item.description}
            hours={anuncio.item.hours}
          />
        )}
        ListEmptyComponent={
          <View
            style={[styles.emptyList, { width: useWindowDimensions().width }]}
          >
            <Text style={{ textAlign: "center" }}>No hay anuncios</Text>
            <Divider />
          </View>
        }
      />
    </>
  );
};

export default AnunciosList;

const styles = StyleSheet.create({
  emptyList: {
    flex: 1,
    height: 100,

    justifyContent: "center",
  },
});
