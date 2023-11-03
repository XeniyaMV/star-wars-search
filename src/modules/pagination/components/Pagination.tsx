import getFullClassName from '../../../helpers/getFullClassName';
import { Props } from '../../../types';
import arrowLeft from '../../../assets/left-double-arrow.svg';
import { useState } from 'react';

const Pagination = (props: Props): JSX.Element => {
  const [page, setPage] = useState(1);
  const fullClassName = getFullClassName('pagination', props.additionalClassName);

  return (
    <div className={fullClassName}>
      <button className="button pagination__button pagination__button_left" onClick={(): void => setPage(page - 1)}>
        <img src={arrowLeft} alt="arrow left" />
      </button>
      <span className="pagination__page-number">{page}</span>
      <button className="button pagination__button pagination__button_right" onClick={(): void => setPage(page + 1)}>
        <img src={arrowLeft} alt="arrow left" />
      </button>
    </div>
  );
};

export default Pagination;
