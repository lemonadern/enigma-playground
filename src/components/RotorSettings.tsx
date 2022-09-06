import { Grid, Select, Text } from "@chakra-ui/react";

export const RotorSettings = () => {
  return (
    <Grid templateColumns={"1fr 6fr 2fr"} placeItems={"center"} gap={4}>
      <Text
        as={"h3"}
        fontSize={"medium"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Rotor1
      </Text>
      <Select placeholder="Select wiring" variant={"filled"}>
        <option value="option1">ABCDEFGHIJKLMNOPQRSTUVWXYZ</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select placeholder="Select a Key" variant={"filled"}>
        <option value="option1">1</option>
        <option value="option2">2</option>
        <option value="option3">3</option>
        <option value="option4">4</option>
        <option value="option5">5</option>
      </Select>
    </Grid>
  );
};
