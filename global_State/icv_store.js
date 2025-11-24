import { create } from "zustand";
import { supabase } from "../services/supabase";

export const useInfoStore = create((set, get) => {
  return {
    vision: "",
    mision: "",
    loading: false,
    error: null,
    valPer: [],
    valDoc: [],
    anuncios: [],
    globalDialogDelete: {
      visible: false,
      onDismiss: () => {},
      onConfirm: () => {},
      title: "Alerta",
      message: "Desea eliminarlo?",
      textConfirm: "Si, quiero.",
      textCancel: "Cancelar",
      icon: "alert",
    },
    showDialogDelete: (
      icon,
      title,
      message,
      textConfirm,
      textCancel,
      onDismiss,
      onConfirm
    ) => {
      set({
        globalDialogDelete: {
          visible: true,
          title,
          icon,
          message,
          textConfirm,
          textCancel,
          onDismiss,
          onConfirm,
        },
      });
    },
    hideDialogDelete: () => {
      set({ globalDialogDelete: { visible: false } });
    },
    globalDialogCreate: {
      visible: false,
      title: "",
      description: "",
      hours: "",
      day: "",
      minutes: "",
      moment: "",
    },
    showDialogCreate: () => {
      set({
        globalDialogCreate: {
          visible: true,
        },
      });
    },
    hideDialogCreate: () => {
      set({ globalDialogCreate: { visible: false } });
    },
    globalDialogUpdate: {
      visible: false,
      id: "",
      name: "",
      hours: "",
      description: "",
      day: "",
      image_url: "",
    },
    showDialogUpdate: (id) => {
      const { anuncios } = get();
      const selectAnuncio = anuncios.filter((anuncio) => {
        return anuncio.id == id;
      });
      set({
        globalDialogUpdate: {
          visible: true,
          id,
          name: selectAnuncio[0].name,
          hours: selectAnuncio[0].hours,
          description: selectAnuncio[0].description,
          day: selectAnuncio[0].day,
          image_url: selectAnuncio[0].image_url,
        },
      });
      const { globalDialogUpdate } = get();
      console.log(globalDialogUpdate);
    },
    hideDialogUpdate: () => {
      set({
        globalDialogUpdate: {
          visible: false,
          name: "",
          hours: "",
          description: "",
          day: "",
          image_url: "",
        },
      });
    },
    test: () => {
      const { globalDialogUpdate } = get();
      console.log(globalDialogUpdate);
    },
    fetchAnuncios: async () => {
      try {
        set({ loading: true });
        const { data, error } = await supabase.from("ads").select("*");
        if (error) throw error;
        set({ anuncios: data });
      } catch (error) {
        throw new Error(error);
      } finally {
        set({ loading: false });
      }
    },
    deleteAnuncio: async (id) => {
      const response = await supabase.from("ads").delete().eq("id", id);
      console.log(response);
    },
    deleteAllAnuncios: async () => {
      const response = await supabase.from("ads").delete().neq("id", 0);
      console.log(response);
    },
    insertAnuncio: async (name, day, hours, description, image_url) => {
      const { error } = await supabase.from("ads").insert({
        name: name,
        hours: hours,
        description: description,
        day: day,
        image_url: image_url,
      });
      if (error) throw error;
    },
    updateAnuncio: async (id, name, day, hours, description, image_url) => {
      const { error } = await supabase
        .from("ads")
        .update({
          name: name,
          hours: hours,
          description: description,
          day: day,
          image_url,
        })
        .eq("id", id);
      if (error) throw error;
    },
  };
});
