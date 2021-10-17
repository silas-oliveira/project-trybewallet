// Coloque aqui suas actions

export const USER_LOGIN = 'USER_LOGIN';

export const userEmail = (email) => ({
  type: USER_LOGIN,
  payload: {
    email,
  },
});
