import { Component } from 'react';
import SearchForm from '../../../modules/searchForm';
import CharacterCards from '../../../modules/characterCards';
import { CardInfoResponse } from '../../../types';

const cardInfoExample: CardInfoResponse[] = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
];

class MainSection extends Component {
  public render(): JSX.Element {
    return (
      <main className="main">
        <div className="container main__wrapper">
          <section className="search">
            <SearchForm submitTitle="Search" inputPlaceholder="Enter a Star Wars character" />
          </section>
          <CharacterCards cardInfos={cardInfoExample} />
        </div>
      </main>
    );
  }
}

export default MainSection;
