"use client"
import { CartProvider } from "use-shopping-cart"
export default function CartsProvider({ children }) {
  return <CartProvider shouldPersist={true}>{children}</CartProvider>;//persiet i5abih f local storage
}
