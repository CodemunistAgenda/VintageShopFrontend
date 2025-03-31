import React, { createContext, useContext, useReducer, useEffect } from "react";

// Initial State
const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
};

// Reducer für Warenkorb-Aktionen
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // Prüfen, ob das Produkt bereits im Warenkorb ist
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        // Wenn ja, Menge erhöhen
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };

        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.price,
          itemCount: state.itemCount + 1,
        };
      } else {
        // Wenn nicht, neues Item hinzufügen
        const newItem = {
          ...action.payload,
          quantity: 1,
        };

        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + action.payload.price,
          itemCount: state.itemCount + 1,
        };
      }

    case "REMOVE_ITEM":
      // Item komplett entfernen
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!itemToRemove) return state;

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        total: state.total - itemToRemove.price * itemToRemove.quantity,
        itemCount: state.itemCount - itemToRemove.quantity,
      };

    case "UPDATE_QUANTITY":
      // Menge eines vorhandenen Items ändern
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          const quantityDiff = action.payload.quantity - item.quantity;
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });

      // Neue Gesamtsumme und Anzahl berechnen
      const { total, itemCount } = updatedItems.reduce(
        (sums, item) => ({
          total: sums.total + item.price * item.quantity,
          itemCount: sums.itemCount + item.quantity,
        }),
        { total: 0, itemCount: 0 }
      );

      return {
        ...state,
        items: updatedItems,
        total,
        itemCount,
      };

    case "CLEAR_CART":
      return initialState;

    case "LOAD_CART":
      return action.payload;

    default:
      return state;
  }
}

// Context erstellen
const CartContext = createContext();

// Provider-Komponente
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Warenkorb aus localStorage laden (beim ersten Laden)
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: parsedCart });
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);

  // Warenkorb in localStorage speichern (bei Änderungen)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Warenkorb-Funktionen
  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_ITEM", payload: product });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: productId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Context-Wert
  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom Hook für einfachen Zugriff
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
