export const getIsAuth = (state) => state.auth.auth;

export const getUserName = (state) => state.auth.user.name;

export const errorRejected = (state) => state.auth.error;
