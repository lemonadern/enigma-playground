import { Flex, Button, Stack, Heading } from "@chakra-ui/react";
import { greet } from "../../wasm/pkg/wasm";

export const Header = () => {
  return (
    <Flex
      as={"header"}
      bg={"gray.50"}
      minH={"40px"}
      flexShrink={"1"}
      paddingY={"2"}
      paddingX={"6"}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={"gray.200"}
      align={"center"}
    >
      <Flex flex={{ base: 1 }} justify={"start"}>
        <Heading
          as={"h2"}
          textAlign={"left"}
          fontFamily={"heading"}
          color={"gray.800"}
          size={"md"}
        >
          Enigma Simulator
        </Heading>
      </Flex>

      {/* <Stack flex={0} justify={"flex-end"} direction={"row"} spacing={6}>
        <Button
          onClick={() => greet()}
          display={"inline-flex"}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"green.400"}
          _hover={{
            bg: "green.300",
          }}
        >
          Greet
        </Button>
      </Stack> */}
    </Flex>
  );
};
