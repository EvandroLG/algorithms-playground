/*
  YearWhereMostPeopleAreAlive
  Given a list of people with their birth and death years, find the year with the highest population
*/

function yearWhereMostPeopleAreAlive(arr) {
  const years = {};

  for (const item of arr) {
    for (let i = item[0]; i <= item[1]; i++) {
      years[i] = years[i] ? years[i] + 1 : 1;
    }
  }

  let highest = -Infinity;
  let year = -Infinity;

  Object.keys(years).forEach((key) => {
    if (highest < years[key]) {
      highest = years[key];
      year = key;
    }
  });

  return year;
}

const assert = require('assert');
console.log(
  yearWhereMostPeopleAreAlive([
    [2000, 2020],
    [1900, 1972],
    [1910, 1988],
    [1985, 2070],
    [1990, 2016],
  ])
);
