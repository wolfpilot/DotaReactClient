// Lib
import React, { PureComponent } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

// Models
import { IHeroDetails } from '../../static/js/models/models';

// Components
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import HeroDetails from '../../components/HeroDetails/HeroDetails';

// Utils
import { getHeroStats } from '../../static/js/services/api/api';

interface IProps extends RouteComponentProps<any> {}

interface IState {
  data: IHeroDetails;
}

const initialState: any = {
  data: {},
};

const getFooterLink = () => (
  <Link to="/" className="link link--btn">
    All heroes
  </Link>
);

class HeroPage extends PureComponent<IProps, IState> {
  public readonly state: Readonly<IState> = {
    ...initialState,
  };

  public async componentDidMount() {
    const id = this.props.match.params.id;

    try {
      const data: any = await getHeroStats(id);

      this.setState({ data });
    } catch (error) {
      throw error;
    }
  }

  public render() {
    const { data } = this.state;

    return (
      <>
        {data ? (
          <>
            {data.name && <PageHeader title={data.name} />}

            <main role="main">
              <HeroDetails {...data} />
            </main>

            <PageFooter children={getFooterLink()} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  }
}

export default withRouter(HeroPage);
