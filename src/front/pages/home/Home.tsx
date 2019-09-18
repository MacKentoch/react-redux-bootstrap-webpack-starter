import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import FadeInEntrance from '../../components/fadeInEntrance';
import HomeInfo from './styled/HomeInfo';
import MainTitle from './styled/MainTitle';
import LightNote from './styled/LightNote';
import { MappedDispatchToProps, MappedStateToProps, OwnProps } from './index';

// #region  types
export type Props = {} & RouteComponentProps &
  MappedDispatchToProps &
  MappedStateToProps &
  OwnProps;
// #endregion

function Home(props: Props) {
  return (
    <FadeInEntrance>
      <Jumbotron>
        <HomeInfo>
          <MainTitle>ReactJS 16.9+ Bootstrap 4</MainTitle>
          <h2>
            with Hot Reload (<i>react-hot-loader 4+</i>
            )!!!
          </h2>
          <h2>and React Router v4</h2>
          <h2>and webpack 4.x</h2>
          <h1>Starter</h1>
          <p>
            <Link className="btn btn-success btn-lg" to={'/about'}>
              <i className="fa fa-info" />
              &nbsp; go to about
            </Link>
          </p>
        </HomeInfo>
      </Jumbotron>
    </FadeInEntrance>
  );
}

Home.displayName = 'Home';

export default Home;
