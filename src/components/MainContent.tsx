import { rotors } from "@/constants/rotors";
import {
  PlugBoardSettings,
  PlugBoardWiring,
  RotorSettings,
} from "@/constants/types";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { EncryptedOutput } from "./EncryptedOutput";
import { EnigmaForm } from "./EnigmaForm";
import { Settings } from "./Settings";

export const MainContent = () => {
  const [encryptedText, setEncryptedText] = useState("");

  const handleSubmit = (text: string) => {
    setEncryptedText(text);
  };

  return (
    <Box as={"main"} width={"90%"} marginX={"auto"}>
      <EnigmaForm onSubmit={handleSubmit} />
      <EncryptedOutput encryptedText={encryptedText} />
      <Settings />
    </Box>
  );
};
