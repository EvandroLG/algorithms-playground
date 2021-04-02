/*
  Filter And Sort Businesses

  Users often specify a number of filters to find the businesses they want.
  So, we need a function to filter those businesses and then sort them by rating.
  The `only_vegan_friendly` filter will be either true, meaning you should only include businesses with `vegan_only` set to true, or false, meaning you should not filter on that field.
  The `max_price` filter should be applied as the maximum of the price field inclusively when it is not `null`.
  Then, return a list of business ids in order to rating highest to lowest.

  Input:
  businesses: [
    { id: 1, rating: 4.0, veganFriendly: true, price: 4, distance: 10.0 },
    { id: 2, rating: 2.5, veganFriendly: false, price: 2, distance: 5.0 },
    { id: 3, rating: 4.5, veganFriendly: false, price: 1, distance: 1.0 },
    { id: 4, rating: 3.0, veganFriendly: true, price: 2, distance: 3.4 },
    { id: 5, rating: 4.5, veganFriendly: true, price: 1, distance: 6.3 },
    { id: 6, rating: 3.5, veganFriendly: true, price: 2, distance: 1.2 },
  ];
  onlyVeganFriendly: false;
  maxPrice: null;
  maxDistance: 6.0;

  Output:
  [3, 6, 4, 2]
*/

function isNumber(value) {
  return typeof value === 'number';
}

function filterAndSortBusinesses(
  businesses,
  onlyVeganFriendly,
  maxPrice,
  maxDistance
) {
  return businesses
    .reduce((acc, business) => {
      const filterVegan = onlyVeganFriendly ? business.veganFriendly : true;
      const filterMaxPrice = isNumber(maxPrice)
        ? business.price <= maxPrice
        : true;
      const filterDistance = isNumber(maxDistance)
        ? business.distance <= maxDistance
        : true;

      if (filterVegan && filterMaxPrice && filterDistance) {
        acc.push(business);
      }

      return acc;
    }, [])
    .sort((a, b) => b.rating - a.rating)
    .map((item) => item.id);
}

const assert = require('assert');

const businesses = [
  { id: 1, rating: 4.0, veganFriendly: true, price: 4, distance: 10.0 },
  { id: 2, rating: 2.5, veganFriendly: false, price: 2, distance: 5.0 },
  { id: 3, rating: 4.5, veganFriendly: false, price: 1, distance: 1.0 },
  { id: 4, rating: 3.0, veganFriendly: true, price: 2, distance: 3.4 },
  { id: 5, rating: 4.5, veganFriendly: true, price: 1, distance: 6.3 },
  { id: 6, rating: 3.5, veganFriendly: true, price: 2, distance: 1.2 },
];

const onlyVeganFriendly = false;
const maxPrice = null;
const maxDistance = 6.0;

assert.deepEqual(
  filterAndSortBusinesses(businesses, onlyVeganFriendly, maxPrice, maxDistance),
  [3, 6, 4, 2]
);
