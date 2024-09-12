export enum Collection {
    SHOW_ALL = "all",
    LENCERIA = "lenceria",
    CAMISAS = "camisas",
    PANTALONES = "pantalones",
    CHAQUETAS = "chaquetas",
    ROPA_INTERIOR = "ropa-interior"
}

export interface CollectionOption {
  name: string;
  value: Collection;
}