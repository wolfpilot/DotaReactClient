// Libs
import React from 'react';

// Models
import { IHero } from '../../static/js/models/models';

// Components
import Hero from '../Hero/Hero';

enum AttributeTypes {
  agi = 'Agility',
  int = 'Intelligence',
  str = 'Strength',
}

const getFilteredHeroes = (heroes: IHero[], type: string) => {
  return heroes.filter((hero: IHero) => hero.primaryAttribute === type);
};

const HeroGrid = (props: any) => {
  const { heroes, type } = props;

  const attributeName = AttributeTypes[type];
  const filteredHeroes = getFilteredHeroes(heroes, type);

  return (
    <div className="hero-grid">
      <h2 className="hero-grid__title">{attributeName}</h2>

      <ul className="hero-grid__list list list--reset">
        {filteredHeroes.map((hero: IHero) => (
          <li key={hero.id} className="hero-grid__item">
            <Hero {...hero} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroGrid;
