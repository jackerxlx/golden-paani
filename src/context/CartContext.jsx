"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

/* =========================================================
   GOLDEN PAANI — CART CONFIGURATION
========================================================= */

const CART_STORAGE_KEY = "golden-paani-cart";

const FREE_SHIPPING_THRESHOLD = 999;
const STANDARD_SHIPPING_CHARGE = 79;

/* =========================================================
   CART PROVIDER
========================================================= */

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  /* =======================================================
     LOAD CART FROM LOCAL STORAGE
  ======================================================= */

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(
        CART_STORAGE_KEY
      );

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        }
      }
    } catch (error) {
      console.error(
        "Golden Paani cart loading error:",
        error
      );
    } finally {
      setIsCartLoaded(true);
    }
  }, []);

  /* =======================================================
     SAVE CART TO LOCAL STORAGE
  ======================================================= */

  useEffect(() => {
    if (!isCartLoaded) return;

    try {
      window.localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cartItems)
      );
    } catch (error) {
      console.error(
        "Golden Paani cart saving error:",
        error
      );
    }
  }, [cartItems, isCartLoaded]);

  /* =======================================================
     ADD TO CART
  ======================================================= */

  const addToCart = (product) => {
    if (!product || product.id === undefined) {
      console.error(
        "Golden Paani: Invalid product passed to addToCart."
      );
      return;
    }

    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.id === product.id
      );

      /* Existing product → increase quantity */

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      /* New product */

      return [
        ...previousItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  /* =======================================================
     REMOVE PRODUCT COMPLETELY
  ======================================================= */

  const removeFromCart = (productId) => {
    setCartItems((previousItems) =>
      previousItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  /* =======================================================
     INCREASE QUANTITY
  ======================================================= */

  const increaseQty = (productId) => {
    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  /* =======================================================
     DECREASE QUANTITY
  ======================================================= */

  const decreaseQty = (productId) => {
    setCartItems((previousItems) =>
      previousItems
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* =======================================================
     SET EXACT QUANTITY
  ======================================================= */

  const updateQuantity = (productId, quantity) => {
    const safeQuantity = Math.max(
      0,
      Math.floor(Number(quantity) || 0)
    );

    setCartItems((previousItems) =>
      previousItems
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: safeQuantity,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* =======================================================
     CLEAR CART
  ======================================================= */

  const clearCart = () => {
    setCartItems([]);
  };

  /* =======================================================
     TOTAL NUMBER OF PRODUCTS
  ======================================================= */

  const totalItems = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total + Number(item.quantity || 0),
      0
    );
  }, [cartItems]);

  /* =======================================================
     SUBTOTAL
  ======================================================= */

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price || 0);
      const quantity = Number(item.quantity || 0);

      return total + price * quantity;
    }, 0);
  }, [cartItems]);

  /* =======================================================
     SHIPPING
  ======================================================= */

  const shipping = useMemo(() => {
    /*
      Empty cart → no shipping
    */

    if (cartItems.length === 0) {
      return 0;
    }

    /*
      ₹999+ → FREE SHIPPING
    */

    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      return 0;
    }

    /*
      Below ₹999 → ₹79
    */

    return STANDARD_SHIPPING_CHARGE;
  }, [cartItems.length, subtotal]);

  /* =======================================================
     FREE SHIPPING STATUS
  ======================================================= */

  const isFreeShipping = useMemo(() => {
    return (
      subtotal >= FREE_SHIPPING_THRESHOLD &&
      subtotal > 0
    );
  }, [subtotal]);

  /* =======================================================
     AMOUNT LEFT FOR FREE SHIPPING
  ======================================================= */

  const amountForFreeShipping = useMemo(() => {
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      return 0;
    }

    return Math.max(
      0,
      FREE_SHIPPING_THRESHOLD - subtotal
    );
  }, [subtotal]);

  /* =======================================================
     FINAL TOTAL
  ======================================================= */

  const totalPrice = useMemo(() => {
    return subtotal + shipping;
  }, [subtotal, shipping]);

  /* =======================================================
     CART EMPTY STATE
  ======================================================= */

  const isCartEmpty = cartItems.length === 0;

  /* =======================================================
     CONTEXT VALUE
  ======================================================= */

  const value = {
    /* Cart */

    cartItems,
    isCartLoaded,
    isCartEmpty,

    /* Actions */

    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    updateQuantity,
    clearCart,

    /* Pricing */

    totalItems,
    subtotal,
    shipping,
    totalPrice,

    /* Shipping */

    isFreeShipping,
    amountForFreeShipping,

    /* Configuration */

    freeShippingThreshold:
      FREE_SHIPPING_THRESHOLD,

    standardShippingCharge:
      STANDARD_SHIPPING_CHARGE,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

/* =========================================================
   USE CART HOOK
========================================================= */

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider. " +
        "Make sure the component is rendered inside <CartProvider>."
    );
  }

  return context;
}