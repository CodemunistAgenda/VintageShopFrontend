
export const getStoredToken = () => {
  return localStorage.getItem("token") || null;
};

export const setStoredToken = (token) => {
  localStorage.setItem("token", token);
};


export const clearStoredToken = () => {
  localStorage.removeItem("token");
};
