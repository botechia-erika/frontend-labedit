import { AppRouter } from "./router/AppRouter";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyled from "./globals/globalStyled";
import {Footer} from './components/Footer/Footer'
import "./styles.css";

export default function App() {
  return (
    <ChakraProvider>
  <>
  <GlobalStyled/>
      <div className="App">
        <GlobalStyled />
        <div className="pAll">
        <AppRouter />
        </div>
      </div>
      <Footer/>
      </>
    </ChakraProvider>
  );
}
