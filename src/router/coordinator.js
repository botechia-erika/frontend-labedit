export const goToHome = (navigate) => {
  navigate("/");
};

export const goToLabeEcommerce = (navigate) => {
  navigate("/frota");
};

export const goToFrotaDetails = (navigate, idDetails) => {
  navigate(`/frota/${idDetails}`);
};



export const goToLogin = (navigate) => {
  navigate("/login");
};


export const goToLabeBooks = (navigate) => {
  navigate("/labe-books");
};

export const goToLabeAdmin = (navigate) => {
  navigate("/payment");
};

export const goToLabeBank = (navigate) => {
  navigate("/labe-bank");
};

export const goToSignIn = (navigate) => {
  navigate("/sign-in");
};

export const goToSignUp = (navigate) => {
  navigate("/register");
};
