import { usePlugBoardWiringsState } from "@/states/plugBoardWiringsState";
import { useRotorInitialPositionsState } from "@/states/rotorInitialPositionsState";
import { useRotorWiringsState } from "@/states/rotorWiringsState";
import { alphabetToBigInt } from "@/utils/alphabetToBigInt";
import { duplicatedElementExists } from "@/utils/duplicatedElementExists";
import { Button, FormLabel, Text, Textarea, VStack } from "@chakra-ui/react";
import { FormEvent, useCallback, useState } from "react";
import { enigma_encrypt_with_settings_inline } from "../../enigma/pkg";

type Props = {
  onSubmit: (text: string) => void;
};

export const EnigmaForm = ({ onSubmit }: Props) => {
  const [text, setText] = useState("hello, world! enigma!!!!");
  const [plugBoardWirings] = usePlugBoardWiringsState();
  const [rotorWirings] = useRotorWiringsState();
  const [rotorPositions] = useRotorInitialPositionsState();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const r1 = rotorWirings[0].toLowerCase();
    const r2 = rotorWirings[1].toLowerCase();
    const r3 = rotorWirings[2].toLowerCase();
    const k1 = alphabetToBigInt(rotorPositions[0].toLowerCase());
    const k2 = alphabetToBigInt(rotorPositions[1].toLowerCase());
    const k3 = alphabetToBigInt(rotorPositions[2].toLowerCase());

    const p1_l = alphabetToBigInt(plugBoardWirings[0][0].toLowerCase());
    const p1_r = alphabetToBigInt(plugBoardWirings[0][1].toLowerCase());
    const p2_l = alphabetToBigInt(plugBoardWirings[1][0].toLowerCase());
    const p2_r = alphabetToBigInt(plugBoardWirings[1][1].toLowerCase());
    const p3_l = alphabetToBigInt(plugBoardWirings[2][0].toLowerCase());
    const p3_r = alphabetToBigInt(plugBoardWirings[2][1].toLowerCase());

    const result = enigma_encrypt_with_settings_inline(
      r1,
      r2,
      r3,
      k1,
      k2,
      k3,
      p1_l,
      p1_r,
      p2_l,
      p2_r,
      p3_l,
      p3_r,
      text
    );
    onSubmit(result);
  };

  const hasError = useCallback(() => {
    return duplicatedElementExists(plugBoardWirings.flat());
  }, [plugBoardWirings]);

  return (
    <form action="" onSubmit={handleSubmit}>
      <VStack placeItems={"center"} gap={8} marginTop={8}>
        <VStack width={{ base: "100%", sm: "55%" }} placeItems={"center"}>
          <FormLabel htmlFor="text-area" fontWeight={"semibold"}>
            Input (※アルファベット小文字のみ暗号化されます)
          </FormLabel>
          <Textarea
            id="text-area"
            width={{ base: "100%" }}
            placeholder="暗号化したい文字列を入力"
            defaultValue={text}
            onChange={(e) => setText(e.target.value)}
          ></Textarea>
        </VStack>
        <Button
          type={"submit"}
          bgColor={"green.400"}
          color={"white"}
          _hover={{ bg: "green.300" }}
          disabled={duplicatedElementExists(plugBoardWirings.flat())}
        >
          Encrypt!
        </Button>
        {hasError() && (
          <Text color={"tomato"}>
            暗号化できません。設定を確認してください。
          </Text>
        )}
      </VStack>
    </form>
  );
};
