// Libs
import React, { PureComponent } from 'react';

// Models
import { IHero } from '../../static/js/models/models';

type IProps = IHero;

class Hero extends PureComponent<IProps, {}> {
  public render() {
    const { name, attackType, primaryAttribute, roles } = this.props;

    return (
      <>
        {name && <h1>Name: {name}</h1>}
        {attackType && <h4>Attack Type: {attackType}</h4>}
        {primaryAttribute && <p>{primaryAttribute}</p>}
        {roles && (
          <ul>
            {roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Hero;
