import { ChangeEvent } from 'react';

interface Props {
  additionalClassName?: string;
}

export interface CardInfoResponse {
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
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
  inputPlaceholder?: string;
}

export interface CharacterCardProps extends Props {
  cardInfo: CardInfoResponse;
}

export interface CharacterCardsProps extends Props {
  cardInfos: CardInfoResponse[];
}
