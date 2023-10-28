import { Component } from 'react';
import CharacterCard from '../../../components/characterCard/CharacterCard';
import { CharacterCardsProps } from '../../../types';

class CharacterCards extends Component<CharacterCardsProps> {
  public render(): JSX.Element {
    return (
      <section className="character-cards">
        <div className="container character-cards__wrapper">
          {this.props.cardInfos.map((item) => (
            <CharacterCard key={item.name} cardInfo={item} />
          ))}
        </div>
      </section>
    );
  }
}

export default CharacterCards;
