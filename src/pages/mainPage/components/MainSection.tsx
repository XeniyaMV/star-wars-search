import { Component } from 'react';
import SearchForm from '../../../modules/searchForm';

class MainSection extends Component {
  public render(): JSX.Element {
    return (
      <main className="main">
        <div className="container main__wrapper">
          <SearchForm submitTitle="Search" inputPlaceholder="Enter a Star Wars character" />
        </div>
      </main>
    );
  }
}

export default MainSection;
