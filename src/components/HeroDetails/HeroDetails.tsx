// Lib
import React from 'react';

// Utils
import { getHeroFullImageSource } from '../../static/js/services/api/api';

const renderHeroRoles = (roles: string[]) => {
  return (
    <>
      <h3 className="hero-details__subheading">Roles</h3>
      <p className="hero-details__roles">
        {roles.map((role, index) => (
          <span key={index}>{(index ? ` ${String.fromCharCode(8226)} ` : '') + role}</span>
        ))}
      </p>
    </>
  );
};

const renderHeroPortrait = (assetName: string) => {
  return (
    <img
      src={getHeroFullImageSource(assetName)}
      className="hero-details__portrait-img"
      role="img"
    />
  );
};

const HeroDetails = (props: any) => {
  const {
    gameAssetName,
    attackType,
    roles,
    baseAgi,
    baseInt,
    baseStr,
    agiGain,
    intGain,
    strGain,
  } = props;

  return (
    <div className="hero-details">
      <div className="hero-details__header">
        <div className="hero-details__portrait">
          {gameAssetName && renderHeroPortrait(gameAssetName)}
        </div>

        <div className="hero-details__overview">
          {attackType && <h2 className="hero-details__heading">{attackType}</h2>}
          {roles && roles.length > 0 && renderHeroRoles(roles)}
        </div>
      </div>

      <div className="hero-details__stats">
        <div className="hero-details__stats-row">
          <h4 className="hero-details__attribute-name">Strength</h4>
          <h4 className="hero-details__attribute-name">Agility</h4>
          <h4 className="hero-details__attribute-name">Intelligence</h4>
        </div>

        <div className="hero-details__stats-row">
          {baseStr && strGain && (
            <p className="hero-details__attributes hero-details__attributes--strength">{`${baseStr} + ${strGain}`}</p>
          )}
          {baseAgi && agiGain && (
            <p className="hero-details__attributes hero-details__attributes--agility">{`${baseAgi} + ${agiGain}`}</p>
          )}
          {baseInt && intGain && (
            <p className="hero-details__attributes hero-details__attributes--intelligence">{`${baseInt} + ${intGain}`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroDetails;
