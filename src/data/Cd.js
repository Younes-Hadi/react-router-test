import Cds from "../components/CDs";

let cds = [
  {
    name: "Fifa",
    number: 21,
    amount: "50,000",
    due: "1401/01/12",
  },
  {
    name: "UFC",
    number: 22,
    amount: "65,000",
    due: "1400/12/22",
  },
  {
    name: "Gran Turizmo 7",
    number: 23,
    amount: "42,000",
    due: "1400/08/03",
  },
  {
    name: "Forza Horizen",
    number: 24,
    amount: "75,000",
    due: "1399/01/12",
  },
  {
    name: "Marvel's Spider-man",
    number: 25,
    amount: "52,000",
    due: "1401/02/14",
  },
];

export const getCds = () => {
  return cds;
};
