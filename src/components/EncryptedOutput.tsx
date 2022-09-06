import { Box, Button, Text } from "@chakra-ui/react";

export const EncryptedOutput = () => {
  return (
    <Box width={"100%"} textAlign={"center"} marginTop={8}>
      <Text as={"h2"} fontWeight={"bold"} fontSize={"large"}>
        Output
      </Text>
      <Text fontSize={"large"}>hello, enigma! this is encrypted</Text>
      <Button size={"sm"}>Copy to ClipBoard</Button>
    </Box>
  );
};
