import { QuestionIcon } from "@chakra-ui/icons";
import { Box, HStack, Stack, Text, Tooltip, VStack } from "@chakra-ui/react";
import { PlugBoardSettings } from "./PlugBoardSettings";
import { RotorSettings } from "./RotorSettings";

export const Settings = () => {
  return (
    <VStack as={"section"} paddingTop={4} gap={8}>
      <Text as={"h2"} fontSize={"large"} fontWeight={"bold"}>
        Enigma Settings
      </Text>
      <VStack gap={4}>
        <Text as={"h3"} fontSize={"medium"} fontWeight={"semibold"}>
          Rotor Settings{" "}
          <Tooltip
            hasArrow
            label="ロータの設定：AからZへの対応と初期位置の文字を選ぶ"
            bg="gray.300"
            color="black"
          >
            <QuestionIcon />
          </Tooltip>
        </Text>
        <RotorSettings />
        <RotorSettings />
        <RotorSettings />
      </VStack>
      <VStack gap={"4"}>
        <Text as={"h3"} fontSize={"medium"} fontWeight={"semibold"}>
          PlugBoard Settings{" "}
          <Tooltip
            hasArrow
            label="プラグボードの設定：交換する文字の組を選ぶ"
            bg="gray.300"
            color="black"
          >
            <QuestionIcon />
          </Tooltip>
        </Text>
        <Stack
          direction={["column", "row"]}
          gap={{ md: 16, sm: 8 }}
          placeContent={"center"}
        >
          <PlugBoardSettings />
          <PlugBoardSettings />
          <PlugBoardSettings />
        </Stack>
      </VStack>
    </VStack>
  );
};
