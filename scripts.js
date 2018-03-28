/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum and minimum are inclusive
}

/**
 * Add a specified amount to curve a score
 * @param {Number} original
 * @param {Number} curveAmount - amount to add for curve
 * @return {Number}
 */
function curveScore(original, curveAmount) {
  return original + curveAmount;
}

// Generate a random array
const testScores = Array.from({ length: 20 }, () => getRandomIntInclusive(60, 100));

// console.log(`Original Scores: ${testScores}`);

/*
 * There is another video showing how to achieve this result using forEach().
 * While that is an adequate solution, this one is just so much sweeter, I have elected
 * to only leave this one in.
*/
const curvedScores = testScores.map(el => curveScore(el, 10));

/*
 * Just for illustration purposes, the ES5 equivalent of our map fxn. is also shown.
 * Notice the dramatic, shorter, less complex syntax when we use ES2015! :)
 * 
 * const curvedScores = testScores.map(function(el) {
 *  return curveScore(el, 10);
 * });
*/

// console.log(`Curved Scores: ${curvedScores}`);

// Generate a listing of the scores in the browser.

// Instantiate the table with the existing HTML <tbody> and the row with the <template>
const template = document.querySelector('#score-row');

/*
 * We must use querySelectorAll() (not querySelector()) to grab all of the <td>s into an array.
*/
const data = template.content.querySelectorAll('td');
