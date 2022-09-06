import { usePlugBoardWiringsState } from "@/states/plugBoardWiringsState";
import { duplicatedElementExists } from "@/utils/duplicatedElementExists";
import { Button, FormLabel, Text, Textarea, VStack } from "@chakra-ui/react";
import { FormEvent, useCallback, useState } from "react";

type Props = {
  onSubmit: (text: string) => void;
};

export const EnigmaForm = ({ onSubmit }: Props) => {
  const [text, setText] = useState("hello, world! enigma!!!!");
  const [plugBoardWirings] = usePlugBoardWiringsState();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(text);
    onSubmit(text);
    console.log("submit");
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
        <p>{plugBoardWirings.flat()}</p>
      </VStack>
    </form>
  );
};
