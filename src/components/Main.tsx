import { Button } from "@chakra-ui/react";
import { greet } from "../../wasm/pkg/wasm";
import { Header } from "./Header";

export const Main = () => {
  return (
    <div>
      <Header />
      <Button onClick={() => greet()}>Greet</Button>
    </div>
  );
};
