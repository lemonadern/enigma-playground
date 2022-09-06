import { Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { MainContent } from "./MainContent";

export const Page = () => {
  return (
    <Flex flexDirection={"column"} minHeight={"100vh"} paddingBottom={16}>
      <Header />
      <MainContent />
      {/* <Button onClick={() => greet()}>Greet</Button> */}
    </Flex>
  );
};
