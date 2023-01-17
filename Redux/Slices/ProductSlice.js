import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("products/getData", async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
});

const initialState = {
  products: [],
  renderState: "idle",
  cart: [],
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = { ...action.payload, qty: 1 };
      state.cart = [...state.cart, newItem];
    },
    updateCart: (state, action) => {
      state.cart.map((product) => {
        if (product.id === action.payload.id) {
          if (action.payload.sign == 1) {
            product.qty += 1;
          } else {
            product.qty -= 1;
          }
        }
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.renderState = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.renderState = "succeeded";
      });
  },
});

export const { addToCart, updateCart } = productSlice.actions;

export default productSlice.reducer;
