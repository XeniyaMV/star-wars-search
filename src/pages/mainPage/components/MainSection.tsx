import { Component } from 'react';
import SearchForm from '../../../modules/searchForm';
import CharacterCards from '../../../modules/characterCards';

class MainSection extends Component {
  public render(): JSX.Element {
    return (
      <main className="main">
        <div className="container main__wrapper">
          <section className="search">
            <SearchForm submitTitle="Search" inputPlaceholder="Enter a Star Wars character" />
          </section>
          <CharacterCards cardInfos={[]} />
        </div>
      </main>
    );
  }
}

export default MainSection;
