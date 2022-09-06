import { rotors } from "@/constants/rotors";
import { RotorWirings } from "@/constants/types";
import { useCallback } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";

const rotorWiringsState = atom<RotorWirings>({
  key: "rotorWiringsState",
  default: [rotors[0].wiring, rotors[0].wiring, rotors[0].wiring],
});

export const useRotorWiringsState = () => {
  return useRecoilState(rotorWiringsState);
};

export const useRotorWiringsMutators = () => {
  const setState = useSetRecoilState(rotorWiringsState);
  const setRotorWirings = useCallback(
    (rotorWirings: RotorWirings) => {
      setState(rotorWirings);
    },
    [setState]
  );

  return [setRotorWirings];
};
