import { keys } from "@/constants/keys";
import { rotors } from "@/constants/rotors";
import {
  useRotorInitialPositionsMutators,
  useRotorInitialPositionsState,
} from "@/states/rotorInitialPositionsState";
import {
  useRotorWiringsMutators,
  useRotorWiringsState,
} from "@/states/rotorWiringsState";
import { Grid, Select, Text } from "@chakra-ui/react";

type Props = {
  indexOfRotor: number;
};

export const RotorSettings = ({ indexOfRotor: index }: Props) => {
  const [wirings] = useRotorWiringsState();
  const [setWirings] = useRotorWiringsMutators();
  const [position] = useRotorInitialPositionsState();
  const [setPosition] = useRotorInitialPositionsMutators();

  const handleChangeWiring = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newWirings = wirings.map((wiring, i) =>
      i === index ? e.target.value : wiring
    );
    setWirings(newWirings);
  };

  const handleChangePosition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPosition = position.map((pos, i) =>
      i === index ? e.target.value : pos
    );
    setPosition(newPosition);
  };

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
      <Select onChange={handleChangeWiring} variant={"filled"}>
        {rotors.map((rotor) => (
          <option key={rotor.name} value={rotor.wiring}>
            {rotor.name}: {rotor.wiring}
          </option>
        ))}
      </Select>
      <Select onChange={handleChangePosition} variant={"filled"}>
        {keys.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </Select>
    </Grid>
  );
};
