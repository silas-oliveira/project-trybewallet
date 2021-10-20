import { SAVE_CURRENCIES, ADD_ACTION } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload.data,
    };
  case ADD_ACTION:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  default:
    return state;
  }
};

export default walletReducer;

// expenses: [
//   {
//     id: 0,
//     value: '10',
//     currency: 'USD',
//     method: 'Cartão de crédito',
//     tag: 'Lazer',                         ===>    EXPENSE
//     description: 'Dez dólares',
//     exchangeRates: response,
//   },
//   {
//     id: 0,
//     value: '10',
//     currency: 'USD',
//     method: 'Cartão de crédito',
//     tag: 'Lazer',
//     description: 'Dez dólares',
//     exchangeRates: response,
// },
