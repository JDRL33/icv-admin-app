import { create } from "zustand";
import supabase from "../services/supabase";

export const useInfoStore = create((set, get) => {
  return {
    vision: "",
    mision: "",
    loading: false,
    error: null,
    valPer: [],
    valDoc: [],
    anuncios: [],
    fetchAnuncios: async () => {
      try {
        const { data, error } = await supabase.from("ads").select();
        if (error) throw error;
        console.log(data);
      } catch (error) {
        throw new Error(error);
      }
    },
  };
});
