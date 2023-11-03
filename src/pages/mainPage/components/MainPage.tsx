import Header from '../../../modules/header';
import StartScreen from '../../../modules/startScreen';
import MainSection from './MainSection';

const MainPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <StartScreen />
      <MainSection />
    </>
  );
};

export default MainPage;
