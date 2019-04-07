// Lib
import React, { PureComponent } from 'react';

// Models
import { IHeroes } from '../../static/js/models/models';

// Components
import PageHeader from '../../components/PageHeader/PageHeader';
import HeroBrowser from '../../components/HeroBrowser/HeroBrowser';

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
    return (
      <>
        <PageHeader title="Heroes" />

        <main role="main">
          <HeroBrowser heroes={this.state.heroes} />
        </main>
      </>
    );
  }
}

export default HomePage;
