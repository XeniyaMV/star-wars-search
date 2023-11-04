import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import getFullClassName from '../../../helpers/getFullClassName';
import transformResponseToDetailsInfo from '../helpers/transformResponseToDetailsInfo';
import { DetailsInfo, Props } from '../../../types';
import getSearchResult from '../../../api/helpers/getSearchResult';
import apiBase from '../../../api/constants/apiBase';
import getFilmResult from '../../../api/helpers/getFilmResult';

const Details = (props: Props): JSX.Element => {
  const fullClassName = getFullClassName('details', props.additionalClassName);
  const [searchParams] = useSearchParams();
  const [details, setDetails] = useState<DetailsInfo>();

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      const newFilmTitles = [];
      const search = searchParams.get('details');
      const result = await getSearchResult(apiBase.baseUrl, apiBase.path, search || '');
      const films = result.results.length !== 0 ? result.results[0].films : [];
      for (let i = 0; i < films.length; i += 1) {
        const film = await getFilmResult(films[i]);
        newFilmTitles.push(film.title);
      }
      setDetails(transformResponseToDetailsInfo(result.results[0], newFilmTitles));
    };
    fetchData();
  }, [searchParams]);

  return (
    <div className={fullClassName}>
      <h1>Details</h1>
      <ul className="list">
        {details
          ? Object.entries(details).map((item) => (
              <li key={item[0].concat(`: ${item[1]}`)} className="list__item">
                <span className="plain-text_highlight">{item[0].replace('_', ' ')}:</span>&nbsp;
                {item[1]}
              </li>
            ))
          : 'Not found'}
      </ul>
    </div>
  );
};

export default Details;
