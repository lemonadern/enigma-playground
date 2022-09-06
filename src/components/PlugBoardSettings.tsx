import { RepeatIcon } from "@chakra-ui/icons";
import { Grid, Select } from "@chakra-ui/react";

export const PlugBoardSettings = () => {
  return (
    <Grid templateColumns={"2fr 1fr 2fr"} placeItems={"center"} gap={2}>
      <Select variant={"filled"}>
        <option value="A">A</option>
        <option value="B">B</option>
      </Select>
      <RepeatIcon />
      <Select variant={"filled"}>
        <option value="A">A</option>
        <option value="B">B</option>
      </Select>
    </Grid>
  );
};
