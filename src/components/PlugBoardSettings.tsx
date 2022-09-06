import { keys } from "@/constants/keys";
import { PlugBoardWiring } from "@/constants/types";
import {
  usePlugBoardWiringsMutators,
  usePlugBoardWiringsState,
} from "@/states/plugBoardWiringsState";
import { RepeatIcon } from "@chakra-ui/icons";
import { Grid, Select } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  indexOfPlugBoard: number;
  defaultWiring: PlugBoardWiring;
};

export const PlugBoardSettings = ({
  indexOfPlugBoard: index,
  defaultWiring: [left, right],
}: Props) => {
  const [plugBoardWiring] = usePlugBoardWiringsState();
  const [setPlugBoardWiring] = usePlugBoardWiringsMutators();

  const [currentWiring, setCurrentWiring] = useState<PlugBoardWiring>([
    left,
    right,
  ]);

  const handleChangeLeft = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentWiring([e.target.value, currentWiring[1]]);
    const newWiring = plugBoardWiring.map((wiring, i) =>
      i === index
        ? ([e.target.value, currentWiring[1]] as PlugBoardWiring)
        : wiring
    );
    setPlugBoardWiring(newWiring);
  };

  const handleChangeRight = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentWiring([currentWiring[0], e.target.value]);
    const newWiring = plugBoardWiring.map((wiring, i) =>
      i === index
        ? ([currentWiring[0], e.target.value] as PlugBoardWiring)
        : wiring
    );
    setPlugBoardWiring(newWiring);
  };

  return (
    <Grid templateColumns={"2fr 1fr 2fr"} placeItems={"center"} gap={2}>
      <Select
        onChange={handleChangeLeft}
        defaultValue={left}
        variant={"filled"}
      >
        {keys.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </Select>
      <RepeatIcon />
      <Select
        onChange={handleChangeRight}
        defaultValue={right}
        variant={"filled"}
      >
        {keys.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </Select>
    </Grid>
  );
};
