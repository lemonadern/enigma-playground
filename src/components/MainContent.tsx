import { Box } from "@chakra-ui/react";
import { EnigmaForm } from "./EnigmaForm";
import { Settings } from "./Setting";

export const MainContent = () => {
  return (
    <Box as={"main"} width={"90%"} marginX={"auto"}>
      <EnigmaForm />
      <Settings />
    </Box>
  );
};
