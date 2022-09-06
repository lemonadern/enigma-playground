import { RotorInitialPositions } from "@/constants/types";
import { useCallback } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";

const rotorInitialPositionsState = atom<RotorInitialPositions>({
  key: "rotorInitialPositionsState",
  default: ["A", "A", "A"],
});

export const useRotorInitialPositionsState = () => {
  return useRecoilState(rotorInitialPositionsState);
};

export const useRotorInitialPositionsMutators = () => {
  const setState = useSetRecoilState(rotorInitialPositionsState);
  const setRotorInitialPositions = useCallback(
    (rotorInitialPositions: RotorInitialPositions) => {
      setState(rotorInitialPositions);
    },
    [setState]
  );
  return [setRotorInitialPositions];
};
