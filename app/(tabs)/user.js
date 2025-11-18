import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CardAnuncio from "../../components/cardAnuncio";

function User() {
  const [ads, setAds] = useState([
    {
      id: 2,
      name: "fgergerg",
      description: "drhrtjrtyjryjehrethrethjurtj",
      day: "hodgfeerges",
      hours: "thsthe",
    },
    {
      id: 1,
      name: "fgergerg",
      description: "drhrtjrtyjryjehrethrethjurtj",
      day: "hodgfeerges",
      hours: "thsthe",
    },
    {
      id: 3,
      name: "fgergerg",
      description: "drhrtjrtyjryjehrethrethjurtj",
      day: "hodgfeerges",
      hours: "thsthe",
    },
  ]);
  return (
    <View style={{ flex: 1 }}>
      {/* {ads.map((anuncio) => { */}
      <FlatList
        data={ads}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <CardAnuncio
            key={item.item.id}
            name={item.item.name}
            day={item.item.day}
            description={item.item.description}
            hours={item.item.hours}
          />
        )}
      />

      {/* })} */}
    </View>
  );
}

export default User;

const styles = StyleSheet.create({});
