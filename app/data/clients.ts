export type Client = {
  name: string;
  placeholder: boolean;
};

// This is a name-only credibility list, separate from the Selected Work case
// studies — see the positioning discussion in memory: a recognizable brand
// name here doesn't need a "wow" case study to justify it. Keep this to real
// paid client relationships only — spec/self-initiated work (e.g. Canyon)
// does not belong here, since the point of this list is verifiable
// credibility.
export const clients: Client[] = [
  { name: "Porsche", placeholder: false },
  { name: "Adidas", placeholder: false },
  { name: "Lululemon", placeholder: false },
  { name: "Purely Athletics", placeholder: false },
  { name: "SO Well Gym", placeholder: false },
  { name: "KNOX Studio", placeholder: false },
  { name: "Merrell", placeholder: false },
  { name: "Carpatree", placeholder: false },
  { name: "Oakberry", placeholder: false },
  { name: "Lancôme", placeholder: false },
  { name: "La Mer", placeholder: false },
  { name: "Le Collet", placeholder: false },
  { name: "Epuzer", placeholder: false },
];
