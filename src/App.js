import { AppRouter } from "./router/AppRouter";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyled from "./globals/globalStyled";

import "./styles.css";

export default function App() {
  return (
    <ChakraProvider>
  <>
  <GlobalStyled/>
      <div className="App">
        <GlobalStyled />
        <AppRouter />
      </div>
      </>
    </ChakraProvider>
  );
}
