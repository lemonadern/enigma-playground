import { useEffect, useState } from "react";
import "./App.css";
import init from "../wasm/pkg";
import { ChakraProvider } from "@chakra-ui/react";
import { Page } from "./components/Page";

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <ChakraProvider>
      <Page />
    </ChakraProvider>
  );
}

export default App;
