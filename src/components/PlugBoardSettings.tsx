import { keys } from "@/constants/keys";
import { PlugBoardWiring } from "@/constants/types";
import { RepeatIcon } from "@chakra-ui/icons";
import { Grid, Select } from "@chakra-ui/react";

type Props = {
  defaultWiring: PlugBoardWiring;
};

export const PlugBoardSettings = ({ defaultWiring: [left, right] }: Props) => {
  return (
    <Grid templateColumns={"2fr 1fr 2fr"} placeItems={"center"} gap={2}>
      <Select defaultValue={left} variant={"filled"}>
        {keys.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </Select>
      <RepeatIcon />
      <Select defaultValue={right} variant={"filled"}>
        {keys.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </Select>
    </Grid>
  );
};
