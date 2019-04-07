// Lib
import React, { PureComponent } from 'react';

// Models
import { IHeroes } from '../../static/js/models/models';

// Components
import HeroGrid from '../../components/HeroGrid/HeroGrid';

// Utils
import { getHeroes } from '../../static/js/services/api/api';

type IState = IHeroes;

const initialState = {
  heroes: [],
};

class HomePage extends PureComponent<{}, IState> {
  public readonly state: Readonly<IState> = {
    ...initialState,
  };

  public async componentDidMount() {
    try {
      const heroes = await getHeroes();

      this.setState({ heroes });
    } catch (error) {
      throw error;
    }
  }

  public render() {
    return <HeroGrid heroes={this.state.heroes} />;
  }
}

export default HomePage;
