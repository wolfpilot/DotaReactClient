// Libs
import React, { PureComponent } from 'react';

// Models
import { IHero } from '../../static/js/models/models';

// Utils
import { getHeroThumbSource } from '../../static/js/services/api/api';

// Components
import HeroTooltip from '../HeroTooltip/HeroTooltip';

type IProps = IHero;

interface IState {
  showTooltip: boolean;
}

class Hero extends PureComponent<IProps, IState> {
  public state = {
    showTooltip: false,
  };

  public render() {
    const { id, gameAssetName, name } = this.props;

    return (
      <div className="hero">
        {id && this.renderThumbnail()}

        <div className="hero__tooltip">
          {this.state.showTooltip && (
            <HeroTooltip id={id} gameAssetName={gameAssetName} name={name} />
          )}
        </div>
      </div>
    );
  }

  private onThumbnailHover = () => {
    this.setState({ showTooltip: true });
  };

  private renderThumbnail() {
    return (
      <img
        src={getHeroThumbSource(this.props.gameAssetName)}
        className="hero__thumb-img"
        role="img"
        onMouseEnter={this.onThumbnailHover}
      />
    );
  }
}

export default Hero;
