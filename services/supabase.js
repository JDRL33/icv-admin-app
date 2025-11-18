import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

const API_URL = Constants.expoConfig?.extra?.API_URL;
const API_KEY = Constants.expoConfig?.extra?.API_KEY;

export const supabase = createClient(
  "https://nafhiyrnophnkpixobey.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hZmhpeXJub3BobmtwaXhvYmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNDU2NDQsImV4cCI6MjA3NDYyMTY0NH0.Gu7qsi1IE64sqPbXjzxV-rVf5cUgYZd9mmpQA5w1CEY"
);
