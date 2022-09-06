import { useEffect, useState } from "react";
import "./App.css";
import init from "../enigma/pkg";
import { ChakraProvider } from "@chakra-ui/react";
import { Page } from "./components/Page";
import { RecoilRoot } from "recoil";

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <ChakraProvider>
      <RecoilRoot>
        <Page />
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
