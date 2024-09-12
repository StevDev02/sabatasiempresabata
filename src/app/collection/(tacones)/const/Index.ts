export enum Collection {
    SHOW_ALL = "all",
    TACO_BAJO = "taco-bajo",
    TACO_ALTO = "taco-alto",
    BOTINES = "botines",
    BOTAS = "botas",
  SANDALIAS = "sandalias",
}

export interface CollectionOption {
  name: string;
  value: Collection;
}