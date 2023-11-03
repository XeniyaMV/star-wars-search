import { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { SearchFormProps } from '../../../types';
import getSearchResult from '../../../api/helpers/getSearchResult';
import apiBase from '../../../api/constants/apiBase';
import transformResponseToCardInfo from '../helpers/transformResponseToCardInfo';
import getFullClassName from '../../../helpers/getFullClassName';
import SearchInput from './SearchInput';

const SearchForm = (props: SearchFormProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || '');
  const fullClassName = getFullClassName('search-form', props.additionalClassName);

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      if (!props.loader) {
        if (props.setLoader) props.setLoader(true);
        const result = await getSearchResult(apiBase.baseUrl, apiBase.path, searchTerm);
        if (props.setCardInfos) props.setCardInfos(transformResponseToCardInfo(result));
        if (props.setLoader) props.setLoader(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (!props.loader) {
      if (props.setLoader) props.setLoader(true);
      const search = searchTerm.trim();
      setSearchTerm(search);
      const result = await getSearchResult(apiBase.baseUrl, apiBase.path, search);
      localStorage.setItem('searchTerm', search);
      if (props.setCardInfos) props.setCardInfos(transformResponseToCardInfo(result));
      if (props.setLoader) props.setLoader(false);
    }
  };

  return (
    <form className={fullClassName} onSubmit={(event): Promise<void> => handleSubmit(event)}>
      <SearchInput value={searchTerm} setValue={handleInputChange} inputPlaceholder={props.inputPlaceholder} />
      <button
        className={`button search-form__submit ${props.loader ? 'button_disabled' : ''}`}
        type="submit"
        disabled={props.loader}
      >
        {props.submitTitle}
      </button>
    </form>
  );
};

export default SearchForm;
