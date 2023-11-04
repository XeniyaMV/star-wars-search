import { useState } from 'react';
import SearchForm from '../../../modules/searchForm';
import CharacterCards from '../../../modules/characterCards';
import Pagination from '../../../modules/pagination';
import ErrorButton from './ErrorButton';
import { CardInfoResponse } from '../../../types';

const MainSection = (): JSX.Element => {
  const [cardInfos, setCardInfos] = useState<CardInfoResponse[]>([]);
  const [loader, setLoader] = useState(false);

  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(false);

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
            setHasNextPage={setHasNext}
            setHasPrevPage={setHasPrev}
          />
        </section>
        <CharacterCards cardInfos={cardInfos} loader={loader} />
        {!loader && (
          <Pagination
            hasNext={hasNext}
            hasPrev={hasPrev}
            setHasNext={setHasNext}
            setHasPrev={setHasPrev}
            setCardInfos={setCardInfos}
            setLoader={setLoader}
          />
        )}
      </div>
    </main>
  );
};

export default MainSection;
