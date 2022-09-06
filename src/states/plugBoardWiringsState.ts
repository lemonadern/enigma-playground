import { PlugBoardWiring } from "@/constants/types";
import { useCallback } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";

const plugBoardWiringsState = atom<PlugBoardWiring[]>({
  key: "plugboardWiringsState",
  default: [
    ["A", "B"],
    ["C", "D"],
    ["E", "F"],
  ],
});

export const usePlugBoardWiringsState = () => {
  return useRecoilState(plugBoardWiringsState);
};

export const usePlugBoardWiringsMutators = () => {
  const setState = useSetRecoilState(plugBoardWiringsState);
  const setPlugBoardWirings = useCallback(
    (plugBoardWirings: PlugBoardWiring[]) => {
      setState(plugBoardWirings);
    },
    [setState]
  );
  return [setPlugBoardWirings];
};
