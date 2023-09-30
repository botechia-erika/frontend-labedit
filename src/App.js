import { AppRouter } from "./router/AppRouter";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyled from "./Theme/globalStyled";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <ChakraProvider>
        <GlobalStyled />
        <div className="container">
          <GlobalStyled />
          <div className="pAll">
            <AppRouter />
          </div>
        </div>
        <Footer />
      </ChakraProvider>
    </>
  );
}
