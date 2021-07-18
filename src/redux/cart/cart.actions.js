export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: 'CLEAR_ITEM_FROM_CART',
  payload: item,
});

export const increaseQuantity = (item) => ({
  type: 'INCREASE_QUANTITY',
  payload: item,
});

export const decreaseQuantity = (item) => ({
  type: 'DECREASE_QUANTITY',
  payload: item,
});
