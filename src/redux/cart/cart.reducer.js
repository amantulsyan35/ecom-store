import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case 'CLEAR_ITEM_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === action.payload
            ? {
                ...cartItem,
                qty: cartItem.qty + 1,
                price: cartItem.price + cartItem.price / cartItem.qty,
              }
            : cartItem
        ),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === action.payload
            ? {
                ...cartItem,
                qty: cartItem.qty - 1,
                price: cartItem.price - cartItem.price / cartItem.qty,
              }
            : cartItem
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
