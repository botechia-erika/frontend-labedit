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
  navigate("/books");
};

export const goToLabeAdmin = (navigate) => {
  navigate("/admin");
};

export const goToLabeBank = (navigate) => {
  navigate("/bank");
};

export const goToSignIn = (navigate) => {
  navigate("/login");
};

export const goToSignUp = (navigate) => {
  navigate("/register");
};
