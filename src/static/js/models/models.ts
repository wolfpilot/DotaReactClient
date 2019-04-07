export interface IHero {
  id: number;
  gameAssetName: string;
  name: string;
  attackType: string;
  primaryAttribute: string;
  roles: string[];
}

export interface IHeroDetails extends IHero {
  heroPortrait: string;
  baseAgi: number;
  baseInt: number;
  baseStr: number;
  agiGain: number;
  intGain: number;
  strGain: number;
}

export interface IHeroes {
  heroes: IHero[];
}
