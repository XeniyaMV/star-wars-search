import { LogoProps } from '../../types';
import getFullClassName from '../../helpers/getFullClassName';

const Logo = (props: LogoProps): JSX.Element => {
  const fullClassName = getFullClassName('logo', props.additionalClassName);

  return (
    <a className={fullClassName} href={`${props.link}`}>
      <h1 className="logo__title">{props.title}</h1>
      {props.iconUrl && <img className="logo__icon" src={`${props.iconUrl}`} alt="logo icon" />}
    </a>
  );
};

export default Logo;
