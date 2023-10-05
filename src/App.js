import { AppRouter } from "./router/AppRouter";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyled from "./globals/globalStyled";

export default function App() {
  return (
  <><ChakraProvider>
      <div className="container">
        <GlobalStyled />
        <div className="pAll">
        <AppRouter />
        </div>
      </div>
     </ChakraProvider>
      </>
   
   
  );
}
