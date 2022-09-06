import { Flex, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      as={"header"}
      bg={"gray.50"}
      flexShrink={"1"}
      paddingY={"4"}
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
        <Link display={"inline-flex"} fontSize={"sm"} wordBreak={"unset"}>
          作者のTwitter
        </Link>
      </Stack> */}
    </Flex>
  );
};
