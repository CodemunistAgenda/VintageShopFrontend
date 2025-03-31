import React from "react";
import { AppProvider } from "./AppContext";
import { CartProvider } from "./CartContext";
import { ProductProvider } from "./ProductContext";
import { UserProvider } from "./UserContext";

// Export der einzelnen Hooks
export { useAppContext } from "./AppContext";
export { useCart } from "./CartContext";
export { useProducts } from "./ProductContext";
export { useUser } from "./UserContext";

// Kombinierter Provider für alle Contexts
export function AllProviders({ children }) {
  return (
    <AppProvider>
      <UserProvider>
        <ProductProvider>
          <CartProvider>{children}</CartProvider>
        </ProductProvider>
      </UserProvider>
    </AppProvider>
  );
}
