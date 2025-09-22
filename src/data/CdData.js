let cds = [
  {
    name: "Fifa",
    number: 1,
    amount: "51,000",
    due: "1401/01/12",
  },
  {
    name: "UFC",
    number: 2,
    amount: "66,000",
    due: "1400/12/22",
  },
  {
    name: "Gran Turizmo 7",
    number: 3,
    amount: "45,000",
    due: "1400/08/03",
  },
  {
    name: "Forza Horizen",
    number: 4,
    amount: "76,000",
    due: "1399/01/12",
  },
  {
    name: "Marvel's Spider-man",
    number: 5,
    amount: "55,000",
    due: "1401/02/14",
  },
];

export const getCds = () => {
  return cds;
};

export const getCdsNumberForCalling=(number)=>{
  return cds.find(cd=>cd.number===number)
}
