import { Box } from "@chakra-ui/react";
import { EncryptedOutput } from "./EncryptedOutput";
import { EnigmaForm } from "./EnigmaForm";
import { Settings } from "./Settings";

export const MainContent = () => {
  return (
    <Box as={"main"} width={"90%"} marginX={"auto"}>
      <EnigmaForm />
      <EncryptedOutput />
      <Settings />
    </Box>
  );
};
