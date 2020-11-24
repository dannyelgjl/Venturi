export function addToCartRequest(id) {
  return {
    type: "@cart/ADD_REQUEST",
    id,
  };
}

export function addToCartSuccess(title) {
  return {
    type: "@cart/ADD_SUCCESS",
    title,
  };
}

export function removeFromCart(id) {
  return {
    type: "@cart/REMOVE",
    id,
  };
}

export function updateAmountRequest(id, stock) {
  return {
    type: "@cart/UPDATE_AMOUNT_REQUEST",
    id,
    stock,
  };
}

export function updateAmountSuccess(id, stock) {
  return {
    type: "@cart/UPDATE_AMOUNT_SUCCESS",
    id,
    stock,
  };
}
