import React, { useState, createContext, useEffect } from "react";
import { DefaultClicked } from "../components/LabeBooks/ButtonLikeDislike/DefaultClicked/DefaultClicked";
import { DislikeClicked } from "../components/LabeBooks/ButtonLikeDislike/DislikeClicked/DislikeClicked";
import { LikeClicked } from "../components/LabeBooks/ButtonLikeDislike/LikeClicked/LikeClicked";

export const LikesDislikesContext = createContext();

export const LikesDislikesProvider = ({ children }) => {
  const [clickedLD, setClickedLD] = useState(0);
  const [buttonView, setButtonView] = useState(<DefaultClicked />);

  const handleDefaultClicked = (e) => {
    setClickedLD(0);
  };

  const handleLikesClicked = (e) => {
    setClickedLD(1);
  };

  const handleDislikesClicked = (e) => {
    setClickedLD(2);
  };

  useEffect(() => {
    renderView(clickedLD);
    // Atualiza o localStorage quando o estado clickedLD é alterado
    localStorage.setItem("clickedLD", clickedLD);
  }, [clickedLD]);

  const renderView = (clickedLD) => {
    if (clickedLD === 0) {
      setButtonView(<DefaultClicked />);
    } else if (clickedLD === 1) {
      setButtonView(<LikeClicked />);
    } else if (clickedLD === 2) {
      setButtonView(<DislikeClicked />);
    }
  };

  // Recupera o estado clicado do localStorage quando o componente é montado
  useEffect(() => {
    const storedClickedLD = localStorage.getItem("clickedLD");
    if (storedClickedLD !== null) {
      setClickedLD(parseInt(storedClickedLD));
    }
  }, []);

  return (
    <LikesDislikesContext.Provider
      value={{
        clickedLD,
        setClickedLD,
        handleDefaultClicked,
        handleDislikesClicked,
        handleLikesClicked,
      }}
    >
      {buttonView}
      {children}
    </LikesDislikesContext.Provider>
  );
};
