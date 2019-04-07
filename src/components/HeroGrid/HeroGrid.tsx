// Libs
import React from 'react';

// Models
import { IHero } from '../../static/js/models/models';

// Components
import Hero from '../Hero/Hero';

const renderHeroList = (heroes: IHero[]) => (
  <ul className="hero-grid">
    {heroes.map((hero: IHero) => (
      <li key={hero.id} className="hero-grid__item">
        <Hero {...hero} />
      </li>
    ))}
  </ul>
);

const HeroGrid = (props: any) => {
  const { heroes } = props;

  return heroes.length > 0 ? (
    renderHeroList(heroes)
  ) : (
    <p>Sorry, no heroes are available at this time.</p>
  );
};

export default HeroGrid;
