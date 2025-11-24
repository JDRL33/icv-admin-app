import { useEffect, useState } from "react";
import { StyleSheet, View, useWindowDimensions, FlatList } from "react-native";
import { Text, Divider, Chip, PaperProvider } from "react-native-paper";
import CardAnuncio from "./cardAnuncio";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { useInfoStore } from "../global_State/icv_store";

const AnunciosList = ({ edit = false }) => {
  const { width } = useWindowDimensions();
  const anuncios = useInfoStore((state) => state.anuncios);
  const loading = useInfoStore((state) => state.loading);

  const fetchAnuncios = useInfoStore((state) => state.fetchAnuncios);
  const showDialogDelete = useInfoStore((state) => state.showDialogDelete);
  const showDialogCreate = useInfoStore((state) => state.showDialogCreate);
  const deleteAllAnuncios = useInfoStore((state) => state.deleteAllAnuncios);
  const deleteAnuncio = useInfoStore((state) => state.deleteAnuncio);
  const hideDialogDelete = useInfoStore((state) => state.hideDialogDelete);
  const showDialogUpdate = useInfoStore((state) => state.showDialogUpdate);

  useEffect(() => {
    fetchAnuncios();
  }, []);

  return (
    <>
      <View style={{ paddingHorizontal: 20 }}>
        <Text variant="titleLarge">Anuncios</Text>
        <Divider bold={true} />
        {edit && (
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              margin: 10,
              gap: 20,
            }}
          >
            <Chip
              icon="plus-circle-multiple-outline"
              onPress={async () => {
                showDialogCreate();
                console.log("Insertar Nuevo Anuncio");
              }}
            >
              Añadir
            </Chip>
            <Chip
              icon="trash-can-outline"
              onPress={() =>
                showDialogDelete(
                  "alert",
                  "Cuidado !!",
                  "¿Estas seguro de eliminar todos los anuncios?",
                  "Si, quiero.",
                  "Cancelar",
                  () => {
                    hideDialogDelete();
                  },
                  async () => {
                    await deleteAllAnuncios();
                    hideDialogDelete();
                    fetchAnuncios();
                  }
                )
              }
            >
              Eliminar todos
            </Chip>
            <Chip
              icon="reload"
              onPress={async () => {
                fetchAnuncios();
              }}
            >
              Actualizar
            </Chip>
          </View>
        )}
      </View>
      {loading && (
        <ActivityIndicator
          style={{ marginVertical: 60 }}
          animating={true}
          color={MD2Colors.blue800}
        />
      )}
      {!loading && (
        <FlatList
          data={anuncios}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={(anuncio) => (
            <CardAnuncio
              key={anuncio.item.id}
              id={anuncio.item.id}
              name={anuncio.item.name}
              day={anuncio.item.day}
              description={anuncio.item.description}
              hours={anuncio.item.hours}
              edit={edit}
              showDialogDelete={() => {
                showDialogDelete(
                  "alert",
                  "Cuidado !!",
                  "¿Estas seguro de eliminar este anuncio?",
                  "Si, quiero.",
                  "Cancelar",
                  () => {
                    hideDialogDelete();
                  },
                  async () => {
                    await deleteAnuncio(anuncio.item.id);
                    hideDialogDelete();
                    fetchAnuncios();
                  }
                );
              }}
              showDialogUpdate={showDialogUpdate}
            />
          )}
          ListEmptyComponent={
            <View style={[styles.emptyList, { width: width }]}>
              <Text style={{ textAlign: "center" }}>No hay anuncios</Text>
              <Divider />
            </View>
          }
        />
      )}
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
