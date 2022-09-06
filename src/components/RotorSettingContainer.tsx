import { VStack } from "@chakra-ui/react";
import { RotorSettings } from "./RotorSettings";

export const RotorSettingContainer = () => {
  return (
    <VStack gap={4}>
      <RotorSettings />
      <RotorSettings />
      <RotorSettings />
    </VStack>
  );
};
