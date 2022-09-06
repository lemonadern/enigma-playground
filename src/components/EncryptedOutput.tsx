import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Text, useToast, VStack } from "@chakra-ui/react";
import { useCallback, useState } from "react";

type Props = {
  encryptedText: string;
};

export const EncryptedOutput = ({ encryptedText }: Props) => {
  const isEmptyText = encryptedText === "";
  const [hasCopied, setHasCopied] = useState(false);

  const handleClickButton = useCallback(() => {
    navigator.clipboard.writeText(encryptedText);
    setHasCopied(true);
  }, [encryptedText]);

  return (
    <Box as={"section"} width={"100%"} textAlign={"center"} marginTop={12}>
      <Text as={"h2"} fontWeight={"bold"} fontSize={"large"}>
        Output
      </Text>
      <VStack
        borderRadius={"md"}
        border={"1px solid"}
        borderColor={"gray.300"}
        width={{ base: "100%", sm: "55%" }}
        marginX={"auto"}
        padding={4}
      >
        <Text
          fontSize={"large"}
          padding={4}
          whiteSpace={"pre-wrap"}
          wordBreak={"break-all"}
        >
          {isEmptyText ? "Nothing Yet..." : encryptedText}
        </Text>
        <Button disabled={isEmptyText} onClick={handleClickButton} size={"sm"}>
          Copy to ClipBoard
          {hasCopied && <CheckIcon marginLeft={2} color={"green.500"} />}
        </Button>
      </VStack>
    </Box>
  );
};
