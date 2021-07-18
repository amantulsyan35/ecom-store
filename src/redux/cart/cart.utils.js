export const addItemToCart = (cartItems, cartItemsToAdd) => {
  let itemIndex = cartItems.findIndex((item) => item.id === cartItemsToAdd.id);
  //   let tempCart = [];
  let item = {};

  if (itemIndex !== -1) {
    item = cartItems[itemIndex];
    item.qty += 1;
    item.price += cartItemsToAdd.price;
    cartItems.splice(itemIndex, 1);
    return [...cartItems, item];
  } else {
    item = {
      name: cartItemsToAdd.name,
      image: cartItemsToAdd.image,
      price: cartItemsToAdd.price,
      id: cartItemsToAdd.id,
      qty: 1,
    };
    return [...cartItems, item];
  }
};
