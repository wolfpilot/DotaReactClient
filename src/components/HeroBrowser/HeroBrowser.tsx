// Libs
import React from 'react';

// Models
import { IHero } from '../../static/js/models/models';

// Config
import { HERO_TYPES } from './constants';

// Components
import HeroGrid from '../HeroGrid/HeroGrid';

interface IProps {
  heroes: IHero[];
}

const renderError = () => <p>Sorry, no heroes are available at this time.</p>;

const renderHeroes = (heroes: IHero[]) =>
  HERO_TYPES.map(type => {
    return <HeroGrid heroes={heroes} type={type} key={type} />;
  });

const HeroBrowser = ({ heroes, ...props }: IProps) => {
  return <>{heroes.length > 0 ? renderHeroes(heroes) : renderError()}</>;
};

export default HeroBrowser;
