import { rotors } from "@/constants/rotors";
import { QuestionIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Stack,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { PlugBoardSettings } from "./PlugBoardSettings";
import { RotorSettings } from "./RotorSettings";

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
            <VStack gap={4}>
              {rotors.map((rotor, i) => (
                <RotorSettings key={rotor.name} indexOfRotor={i} />
              ))}
            </VStack>
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
            <Stack
              direction={["column", "row"]}
              gap={{ md: 16, sm: 8 }}
              placeContent={"center"}
            >
              <PlugBoardSettings
                indexOfPlugBoard={0}
                defaultWiring={["A", "B"]}
              />
              <PlugBoardSettings
                indexOfPlugBoard={1}
                defaultWiring={["C", "D"]}
              />
              <PlugBoardSettings
                indexOfPlugBoard={2}
                defaultWiring={["E", "F"]}
              />
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};
