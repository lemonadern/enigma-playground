import { Button, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { FormEvent, FormEventHandler } from "react";

export const EnigmaForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <VStack gap={4} placeItems={"center"} padding={4}>
        <Text as={"h2"} fontWeight={"bold"} fontSize={"large"}>
          Enigma
        </Text>
        <Textarea
          placeholder="暗号化したい文字列を入力"
          defaultValue={"hello, world! enigma!!!"}
        ></Textarea>

        <Button
          type={"submit"}
          bgColor={"green.400"}
          color={"white"}
          _hover={{ bg: "green.300" }}
        >
          Encrypt!
        </Button>
        <Text fontSize={"large"}>hello, world! enigma!</Text>
      </VStack>
    </form>
  );
};
