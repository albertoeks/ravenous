import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';


var business = {

  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Lucca Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
  };

  const businesses = [business, business, business, business, business, business];

class App extends React.Component {

  searchYelp(term, location, sortBy){
    return 'Searching Yelp with' + term +  ', ' + location +  ', ' + sortBy;
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar/>
        <BusinessList businesses={businesses}/>
      </div>
    );
  }
}

export default App;
