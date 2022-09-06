import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FormEvent } from "react";

export const EnigmaForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <VStack placeItems={"center"} marginTop={8}>
        <FormLabel htmlFor="text-area">暗号化する文字列を入力</FormLabel>
        <Textarea
          id="text-area"
          width={{ base: "100%", sm: "55%" }}
          placeholder="暗号化したい文字列を入力"
          defaultValue={"hello, world! enigma!!!"}
        ></Textarea>

        <Button
          type={"submit"}
          bgColor={"green.400"}
          color={"white"}
          marginTop={4}
          _hover={{ bg: "green.300" }}
        >
          Encrypt!
        </Button>
      </VStack>
    </form>
  );
};
