import getSearchResult from '../../../api/helpers/getSearchResult';
import apiBase from '../../../api/constants/apiBase';
import getFullClassName from '../../../helpers/getFullClassName';
import { PaginationProps } from '../../../types';
import arrowLeft from '../../../assets/left-double-arrow.svg';

const Pagination = (props: PaginationProps): JSX.Element => {
  const fullClassName = getFullClassName('pagination', props.additionalClassName);

  const handleClickNext = async (): Promise<void> => {
    if (props.hasNext) {
      if (props.setLoader) props.setLoader(true);
      const searchTerm = localStorage.getItem('searchTerm') || '';
      const result = await getSearchResult(apiBase.baseUrl, apiBase.path, searchTerm, props.page + 1);
      props.setCardInfos(result.results);
      props.setPage(props.page + 1);
      props.setHasPrev(true);
      if (result.next === null) props.setHasNext(false);
      if (props.setLoader) props.setLoader(false);
    }
  };

  const handleClickPrev = async (): Promise<void> => {
    if (props.hasPrev) {
      if (props.setLoader) props.setLoader(true);
      const searchTerm = localStorage.getItem('searchTerm') || '';
      const result = await getSearchResult(apiBase.baseUrl, apiBase.path, searchTerm, props.page - 1);
      props.setCardInfos(result.results);
      props.setPage(props.page - 1);
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
      <span className="pagination__page-number">{props.page}</span>
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
