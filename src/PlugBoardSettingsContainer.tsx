import { Stack } from "@chakra-ui/react";
import { PlugBoardSettings } from "./components/PlugBoardSettings";

export const PlugBoardSettingsContainer = () => {
  return (
    <Stack
      direction={["column", "row"]}
      gap={{ md: 16, sm: 8 }}
      placeContent={"center"}
    >
      <PlugBoardSettings defaultWiring={[0, 1]} />
      <PlugBoardSettings defaultWiring={[2, 3]} />
      <PlugBoardSettings defaultWiring={[4, 5]} />
    </Stack>
  );
};
