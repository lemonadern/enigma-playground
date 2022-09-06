import { Box, Text } from "@chakra-ui/react";

type Props = {
  encryptedText: string;
};

export const EncryptedOutput = ({ encryptedText }: Props) => {
  const isEmptyText = encryptedText === "";
  return (
    <Box as={"section"} width={"100%"} textAlign={"center"} marginTop={12}>
      <Text as={"h2"} fontWeight={"bold"} fontSize={"large"}>
        Output
      </Text>
      <Text
        display={"block"}
        borderRadius={"md"}
        border={"1px solid"}
        borderColor={"gray.300"}
        width={{ base: "100%", sm: "70%" }}
        marginX={"auto"}
        fontSize={"large"}
        padding={8}
        whiteSpace={"pre-wrap"}
      >
        {isEmptyText ? "Nothing Yet..." : encryptedText}
      </Text>
      {/* <Button size={"sm"}>Copy to ClipBoard</Button> */}
      {/* todo: implement "copy to clipboard" */}
    </Box>
  );
};
