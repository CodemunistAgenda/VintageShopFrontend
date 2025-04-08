// src/lib/storage.ts

export const getStoredWishlist = <T = any>(): T | null => {
  if (typeof window === "undefined") return null;
  try {
    const data = localStorage.getItem("wishlist");
    return data ? (JSON.parse(data) as T) : null;
  } catch (error) {
    console.error("Fehler beim Lesen der Wunschliste aus localStorage:", error);
    return null;
  }
};

export const setStoredWishlist = (value: any): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("wishlist", JSON.stringify(value));
  } catch (error) {
    console.error("Fehler beim Speichern der Wunschliste:", error);
  }
};

export const clearStoredWishlist = (): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem("wishlist");
  } catch (error) {
    console.error("Fehler beim Entfernen der Wunschliste:", error);
  }
};
