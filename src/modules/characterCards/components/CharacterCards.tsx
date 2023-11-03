import CharacterCard from '../../../components/characterCard/CharacterCard';
import Loader from '../../../UI/loader/Loader';
import { CharacterCardsProps } from '../../../types';

const CharacterCards = (props: CharacterCardsProps): JSX.Element => {
  return (
    <section className="character-cards">
      <div className="container character-cards__wrapper">
        {!props.loader ? props.cardInfos.map((item) => <CharacterCard key={item.name} cardInfo={item} />) : <Loader />}
      </div>
    </section>
  );
};

export default CharacterCards;
