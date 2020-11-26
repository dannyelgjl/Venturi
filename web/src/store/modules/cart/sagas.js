// redux-saga-effects
import { call, select, put, all, takeLatest } from "redux-saga/effects";
// Actions
import {
  addToCartSuccess,
  updateAmountRequest,
  updateAmountSuccess,
} from "./actions";
// API
import api from "../../../services/api";
// Formador de preços
import { formatPrice } from "../../../util/format";
// Toast
import { toast } from "react-toastify";


function* addToCart({ id }) {
  const productsExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  const stock = yield call(api.get, `/products/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productsExists ? productsExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error("Quantidade solicitada fora do estoque");
    return;
  }

  if (productsExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `products/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error("Quantidade solicitada fora do estoque");
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest("@cart/ADD_REQUEST", addToCart),
  takeLatest("@cart/UPDATE_AMOUNT_REQUEST", updateAmount),
]);
