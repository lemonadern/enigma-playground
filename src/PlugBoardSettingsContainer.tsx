import { Stack } from "@chakra-ui/react";
import { PlugBoardSettings } from "./components/PlugBoardSettings";

export const PlugBoardSettingsContainer = () => {
  return (
    <Stack
      direction={["column", "row"]}
      gap={{ md: 16, sm: 8 }}
      placeContent={"center"}
    >
      <PlugBoardSettings />
      <PlugBoardSettings />
      <PlugBoardSettings />
    </Stack>
  );
};
