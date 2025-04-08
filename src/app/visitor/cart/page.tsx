"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  fetchCart,
} from "@/store/cartSlice";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import {
  CartContainer,
  CartHeader,
  CartEmpty,
  CartItems,
  CartCard,
  CartImage,
  CartDetails,
  QuantityControls,
  RemoveButton,
  CartSummary,
  SummaryButton,
  BackToShopLink,
} from "./styles/CartPage.styled";

const CartPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { items: cartItems = [], totalPrice } = useSelector((state: any) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId))
      .unwrap()
      .then(() => toast.info("🗑️ Produkt entfernt"));
  };

  const handleClear = () => {
    dispatch(clearCart())
      .unwrap()
      .then(() => toast.warn("🧹 Warenkorb geleert"));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Dein Warenkorb ist leer!");
      return;
    }
    router.push("/checkout");
  };

  if (cartItems.length === 0) {
    return (
      <CartEmpty>
        <ToastContainer />
        <h2>Dein Warenkorb ist leer 🛒</h2>
        <BackToShopLink href="/shop">Jetzt einkaufen</BackToShopLink>
      </CartEmpty>
    );
  }

  return (
    <CartContainer>
      <ToastContainer />
      <CartHeader>Warenkorb</CartHeader>

      <CartItems>
        {cartItems.map((item: any) => (
          <CartCard key={item.product?._id}>
            <CartImage
              src={item.product?.images?.[0] || "/placeholder.jpg"}
              alt={item.product?.title || "Produktbild"}
            />
            <CartDetails>
              <h3>{item.product?.title}</h3>
              <p>Stückpreis: {item.priceAtAddition?.toFixed(2)} €</p>

              <QuantityControls>
                <button onClick={() => dispatch(decreaseQuantity(item.product._id))}>–</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.product._id))}>+</button>
              </QuantityControls>

              <p>Zwischensumme: {(item.quantity * item.priceAtAddition).toFixed(2)} €</p>

              <RemoveButton onClick={() => handleRemove(item.product._id)}>
                Entfernen
              </RemoveButton>
            </CartDetails>
          </CartCard>
        ))}
      </CartItems>

      <CartSummary>
        <h2>Gesamtsumme: {totalPrice?.toFixed(2)} €</h2>
        <SummaryButton onClick={handleCheckout}>Zur Kasse</SummaryButton>
        <SummaryButton onClick={handleClear} dark>
          Warenkorb leeren
        </SummaryButton>
      </CartSummary>
    </CartContainer>
  );
};

export default CartPage;
