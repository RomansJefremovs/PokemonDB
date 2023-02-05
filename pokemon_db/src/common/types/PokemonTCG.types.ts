export interface Data {
    id:                     string;
    name:                   string;
    supertype:              string;
    subtypes:               string[];
    hp:                     string;
    types:                  string[];
    evolvesTo:              string[];
    rules:                  string[];
    attacks:                Attack[];
    weaknesses:             Weakness[];
    retreatCost:            string[];
    convertedRetreatCost:   number;
    set:                    Set;
    number:                 string;
    artist:                 string;
    rarity:                 string;
    nationalPokedexNumbers: number[];
    legalities:             Legalities;
    images:                 DataImages;
    tcgplayer:              Tcgplayer;
    cardmarket:             Cardmarket;
}

export interface Attack {
    name:                string;
    cost:                string[];
    convertedEnergyCost: number;
    damage:              string;
    text:                string;
}

export interface Cardmarket {
    url:       string;
    updatedAt: string;
    prices:    { [key: string]: number };
}

export interface DataImages {
    small: string;
    large: string;
}

export interface Legalities {
    unlimited: string;
    expanded:  string;
}

export interface Set {
    id:           string;
    name:         string;
    series:       string;
    printedTotal: number;
    total:        number;
    legalities:   Legalities;
    ptcgoCode:    string;
    releaseDate:  string;
    updatedAt:    string;
    images:       SetImages;
}

export interface SetImages {
    symbol: string;
    logo:   string;
}

export interface Tcgplayer {
    url:       string;
    updatedAt: string;
    prices:    Prices;
}

export interface Prices {
    holofoil: Holofoil;
}

export interface Holofoil {
    low:    number;
    mid:    number;
    high:   number;
    market: number;
}

export interface Weakness {
    type:  string;
    value: string;
}