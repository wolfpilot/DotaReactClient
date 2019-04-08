// Libs
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// Models
import { IHero } from '../../static/js/models/models';

// Utils
import { getHeroThumbSource } from '../../static/js/services/api/api';

type IProps = IHero;

class Hero extends PureComponent<IProps, {}> {
  public render() {
    const { id, name, attackType } = this.props;

    return (
      <div className="hero">
        {id && this.renderThumbnail()}

        <div className="hero__details">
          <Link
            to={`${process.env.PUBLIC_URL}/hero/${id}`}
            title="Go to hero details"
            className="hero__link"
          />
          {name && <h1 className="hero__name">{name}</h1>}
          {attackType && <h4 className="hero__attack-type">Attack Type: {attackType}</h4>}
        </div>
      </div>
    );
  }
  private renderThumbnail() {
    return (
      <img
        src={getHeroThumbSource(this.props.gameAssetName)}
        className="hero__thumb-img"
        role="img"
      />
    );
  }
}

export default Hero;
