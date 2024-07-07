import { DataFrame } from "./dataframe";

export interface AnimalDatum {
    image: string;
    name: string;
    species: string;
    nicknames: string[];
    height: number;
    weight: number;
    lifespan: number;
    data: DataFrame<number, number>;
}

export interface AnimalData {
    [key: string]: AnimalDatum;
}
