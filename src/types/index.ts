import { ChangeEvent } from 'react';
interface Props {
  additionalClassName?: string;
}

export interface LogoProps extends Props {
  link: string;
  title?: string;
  iconUrl?: string;
}

export interface HeaderProps extends Props {}

export interface SearchFormProps extends Props {
  submitTitle: string;
  inputPlaceholder?: string;
}

export interface SearchInputProps extends Props {
  value: string;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
}
