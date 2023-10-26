interface Props {
  additionalClassName?: string;
}

export interface LogoProps extends Props {
  link: string;
  title?: string;
  iconUrl?: string;
}

export interface HeaderProps extends Props {}
