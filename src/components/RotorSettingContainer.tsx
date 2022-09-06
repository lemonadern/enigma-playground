import { VStack } from "@chakra-ui/react";
import { RotorSettings } from "./RotorSettings";

export const RotorSettingContainer = () => {
  return (
    <VStack gap={4}>
      <RotorSettings rotorName="Rotor1" />
      <RotorSettings rotorName="Rotor2" />
      <RotorSettings rotorName="Rotor3" />
    </VStack>
  );
};
