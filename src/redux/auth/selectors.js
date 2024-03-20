export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRegistered = state => state.auth.isRegistered;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsError = state => state.auth.error;

export const selectIsLoading = state => state.auth.isLoading;
