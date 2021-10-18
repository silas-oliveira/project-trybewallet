// Coloque aqui suas actions

import getCurrency from '../services/currencyApi';

export const USER_LOGIN = 'USER_LOGIN';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

export const userEmail = (email) => ({
  type: USER_LOGIN,
  payload: {
    email,
  },
});

const saveCurrencies = (data) => ({
  type: SAVE_CURRENCIES,
  payload: {
    data,
  },
});

export const fetchCurrencies = () => (
  (dispatch) => getCurrency()
    .then((data) => dispatch(saveCurrencies(Object.keys(data))))
);
