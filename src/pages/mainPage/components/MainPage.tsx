import { Component } from 'react';
import Header from '../../../modules/header';
import StartScreen from '../../../modules/startScreen';

class MainPage extends Component {
  public render(): JSX.Element {
    return (
      <>
        <Header />
        <StartScreen />
      </>
    );
  }
}

export default MainPage;
