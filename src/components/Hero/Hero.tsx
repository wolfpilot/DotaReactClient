// Libs
import React, { PureComponent } from 'react';

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
          {name && <h1 className="hero__name">{name}</h1>}
          {attackType && <h4 className="hero__attack-type">Attack Type: {attackType}</h4>}
        </div>
      </div>
    );
  }
  private renderThumbnail() {
    return <img src={getHeroThumbSource(this.props.id)} className="hero__thumb-img" role="img" />;
  }
}

export default Hero;
