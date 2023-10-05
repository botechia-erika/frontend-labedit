export const goToHome = (navigate) => {
  navigate("/");
};

export const goToFrota = (navigate) => {
  navigate("/frota");
};

export const goToFrotaDetails = (navigate, idDetails) => {
  navigate(`/products/${idDetails}`);
};

export const goToLabeEdit = (navigate) => {
  navigate("/sign-in");
};

export const goToLabeBooks = (navigate) => {
  navigate("/labe-books");
};

export const goToAdmin = (navigate) => {
  navigate("/admin");
};

export const goToClub = (navigate) => {
  navigate("/club");
};

export const goToSignIn = (navigate) => {
  navigate("/sign-in");
};

export const goToSignUp = (navigate) => {
  navigate("/sign-up");
};
