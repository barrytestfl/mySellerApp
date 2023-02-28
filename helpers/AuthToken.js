// utils-expo.tsx
import * as SecureStore from "expo-secure-store";

const TOKEN = "userToken";

export async function getItem(key) {
  const value = await SecureStore.getItemAsync(key);

  return value ? value : null;
}

export async function setItem(key, value) {
  return SecureStore.setItemAsync(key, value);
}
export async function removeItem(key) {
  return SecureStore.deleteItemAsync(key);
}

export const getToken = () => getItem(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value) => setItem(TOKEN, value);
