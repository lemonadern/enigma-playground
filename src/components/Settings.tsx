import { QuestionIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { PlugBoardSettingsContainer } from "../PlugBoardSettingsContainer";
import { RotorSettingContainer } from "./RotorSettingContainer";

export const Settings = () => {
  return (
    <VStack as={"section"} paddingTop={8}>
      <Accordion
        paddingTop={4}
        as={"section"}
        allowMultiple
        defaultIndex={[]}
        width={{ base: "100%", sm: "70%" }}
      >
        <AccordionItem>
          <AccordionButton>
            <Text as={"h3"} fontSize={"medium"} fontWeight={"semibold"}>
              Rotor Settings{" "}
              <Tooltip
                hasArrow
                label="ロータの設定:AからZへの対応と初期位置の文字を選ぶ"
                bg="gray.300"
                color="black"
              >
                <QuestionIcon />
              </Tooltip>
            </Text>
          </AccordionButton>
          <AccordionPanel>
            <RotorSettingContainer />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Text as={"h3"} fontSize={"medium"} fontWeight={"semibold"}>
              PlugBoard Settings{" "}
              <Tooltip
                hasArrow
                label="プラグボードの設定:交換する文字の組を選ぶ"
                bg="gray.300"
                color="black"
              >
                <QuestionIcon />
              </Tooltip>
            </Text>
          </AccordionButton>
          <AccordionPanel>
            <PlugBoardSettingsContainer />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};
