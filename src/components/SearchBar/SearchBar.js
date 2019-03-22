import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component{
  render() {
    return(
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Lets Go</a>
        </div>
      </div>
    );
  }


  renderSortByOptions() {
    return Object.Keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li className={sortByOptionValue} key={sortByOptionValue}> {sortByOption}
        </li>
      );
    });

  }
}

export default SearchBar;
