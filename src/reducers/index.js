// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

import { combineReducers } from 'redux';
import { emailReducer } from './user';
import walletReducer from './wallet';

const roorReducer = combineReducers({
  user: emailReducer,
  wallet: walletReducer,
});

export default roorReducer;
