import { PlugBoardWiring } from "@/constants/types";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { EncryptedOutput } from "./EncryptedOutput";
import { EnigmaForm } from "./EnigmaForm";
import { Settings } from "./Settings";

type EnigmaSettings = {
  rotorWiring1: string;
  rotorWiring2: string;
  rotorWiring3: string;
  rotorInitialPosition1: string;
  rotorInitialPosition2: string;
  rotorInitialPosition3: string;
  plugBoardWirings: PlugBoardWiring[];
};

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
