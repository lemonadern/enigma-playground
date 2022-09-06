import { Button, FormLabel, Textarea, VStack } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

type Props = {
  onSubmit: (text: string) => void;
};

export const EnigmaForm = ({ onSubmit }: Props) => {
  const [text, setText] = useState("hello, world! enigma!!!!");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(text);
    onSubmit(text);
    console.log("submit");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <VStack placeItems={"center"} gap={8} marginTop={8}>
        <VStack width={{ base: "100%", sm: "55%" }} placeItems={"center"}>
          <FormLabel htmlFor="text-area" fontWeight={"semibold"}>
            Input
          </FormLabel>
          <Textarea
            id="text-area"
            width={{ base: "100%" }}
            placeholder="暗号化したい文字列を入力"
            defaultValue={text}
            onChange={(e) => setText(e.target.value)}
          ></Textarea>
          {/* todo: 受け入れ可能文字列の表示 */}
        </VStack>
        <Button
          type={"submit"}
          bgColor={"green.400"}
          color={"white"}
          _hover={{ bg: "green.300" }}
        >
          Encrypt!
        </Button>
      </VStack>
    </form>
  );
};
