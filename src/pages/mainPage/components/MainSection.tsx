import { useState } from 'react';
import SearchForm from '../../../modules/searchForm';
import CharacterCards from '../../../modules/characterCards';
import ErrorButton from './ErrorButton';
import { CardInfo } from '../../../types';

const MainSection = (): JSX.Element => {
  const [cardInfos, setCardInfos] = useState<CardInfo[]>([]);
  const [loader, setLoader] = useState(false);

  return (
    <main className="main">
      <div className="container main__wrapper">
        <ErrorButton />
        <section className="search">
          <SearchForm
            submitTitle="Search"
            inputPlaceholder="Enter a Star Wars character"
            loader={loader}
            setCardInfos={setCardInfos}
            setLoader={setLoader}
          />
        </section>
        <CharacterCards cardInfos={cardInfos} loader={loader} />
      </div>
    </main>
  );
};

export default MainSection;
