import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import getSearchResult from '../../../api/helpers/getSearchResult';
import apiBase from '../../../api/constants/apiBase';
import getFullClassName from '../../../helpers/getFullClassName';
import { PaginationProps, SearchResponse } from '../../../types';
import arrowLeft from '../../../assets/left-double-arrow.svg';

const Pagination = (props: PaginationProps): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageQuaryParam = searchParams.get('page');
  const [page, setPage] = useState(pageQuaryParam ? +pageQuaryParam : 1);

  const fullClassName = getFullClassName('pagination', props.additionalClassName);

  const setNewInfo = async (page: number): Promise<SearchResponse> => {
    const searchTerm = localStorage.getItem('searchTerm') || '';
    const result = await getSearchResult(apiBase.baseUrl, apiBase.path, searchTerm, page);
    props.setCardInfos(result.results);
    setSearchParams({ page: `${page}` });
    setPage(page);
    return result;
  };

  const handleClickNext = async (): Promise<void> => {
    if (props.hasNext) {
      if (props.setLoader) props.setLoader(true);
      const result = await setNewInfo(page + 1);
      props.setHasPrev(true);
      if (result.next === null) props.setHasNext(false);
      if (props.setLoader) props.setLoader(false);
    }
  };

  const handleClickPrev = async (): Promise<void> => {
    if (props.hasPrev) {
      if (props.setLoader) props.setLoader(true);
      const result = await setNewInfo(page - 1);
      props.setHasNext(true);
      if (result.previous === null) props.setHasPrev(false);
      if (props.setLoader) props.setLoader(false);
    }
  };

  return (
    <div className={fullClassName}>
      <button
        className={`button pagination__button ${!props.hasPrev ? 'button_disabled' : ''}`}
        onClick={handleClickPrev}
      >
        <img src={arrowLeft} alt="arrow left" />
      </button>
      <span className="pagination__page-number">{page}</span>
      <button
        className={`button pagination__button pagination__button_right ${!props.hasNext ? 'button_disabled' : ''}`}
        onClick={handleClickNext}
        disabled={!props.hasNext}
      >
        <img src={arrowLeft} alt="arrow right" />
      </button>
    </div>
  );
};

export default Pagination;
