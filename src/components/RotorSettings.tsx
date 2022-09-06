import { keys } from "@/constants/keys";
import { rotors } from "@/constants/rotors";
import { Grid, Select, Text } from "@chakra-ui/react";

type Props = {
  indexOfRotor: number;
};

export const RotorSettings = ({ indexOfRotor: index }: Props) => {
  return (
    <Grid templateColumns={"1fr 6fr 3fr"} placeItems={"center"} gap={4}>
      <Text
        as={"h3"}
        fontSize={"medium"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Rotor{index + 1}
      </Text>
      <Select variant={"filled"}>
        {rotors.map((rotor) => (
          <option key={rotor.name} value={rotor.wiring}>
            {rotor.name}: {rotor.wiring}
          </option>
        ))}
      </Select>
      <Select variant={"filled"}>
        {keys.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </Select>
    </Grid>
  );
};
