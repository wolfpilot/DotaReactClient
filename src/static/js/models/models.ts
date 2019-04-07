export interface IHero {
  id: string;
  name: string;
  attackType: string;
  primaryAttribute: string;
  roles: string[];
}

export interface IHeroes {
  heroes: IHero[];
}
