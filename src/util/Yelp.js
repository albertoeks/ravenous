const apiKey = _AKCpWTPCcjevRc-BY1Uqbk5wR-Zn-X7N3TTbCsuWyh6drpUHOxvEM5hn06s7ADvtzeaRDIQheYIZn0tFpxlxpK_wXehSQhI-Dw7JH0mjPlKlS6nIjlegyiQQ3asXHYx;

const Yelp;

search(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,  { 
        headers: {
          Authorization: `Bearer ${apiKey}`} 
        }).then(response => {
            return response.json();
          });
}