export interface IHero {
  id: number;
  name: string;
  attackType: string;
  primaryAttribute: string;
  roles: string[];
}

export interface IHeroes {
  heroes: IHero[];
}
