// Libs
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  id: number;
  gameAssetName: string;
  name: string;
}

class HeroTooltip extends PureComponent<IProps, {}> {
  public state = {
    style: {
      backgroundImage: `url(https://api.opendota.com/apps/dota2/images/heroes/${
        this.props.gameAssetName
      }_vert.jpg)`,
    },
  };

  public render() {
    const { id, name } = this.props;
    const { style } = this.state;

    return (
      <div className="hero-tooltip" style={style}>
        <Link
          to={`${process.env.PUBLIC_URL}/hero/${id}`}
          title="Go to hero details"
          className="hero-tooltip__link"
        >
          {name && <span className="hero-tooltip__name">{name}</span>}
        </Link>
      </div>
    );
  }
}

export default HeroTooltip;
