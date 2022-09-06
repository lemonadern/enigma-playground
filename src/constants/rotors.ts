// 参考：
// https://en.wikipedia.org/wiki/Enigma_rotor_details#Rotor_wiring_tables

type RotorWiringTable = {
  name: string;
  wiring: string;
};

export const rotors: RotorWiringTable[] = [
  {
    name: "IC",
    wiring: "DMTWSILRUYQNKFEJCAZBPGXOHV",
  },
  {
    name: "IIC",
    wiring: "HQZGPJTMOBLNCIFDYAWVEUSRKX",
  },
  {
    name: "IIIC",
    wiring: "UQNTLSZFMREHDPXKIBVYGJCWOA",
  },
];
