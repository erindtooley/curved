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

const curvedScores = testScores.map(el => curveScore(el, 10));

// Generate a listing of the scores in the browser.

// Instantiate the table with the existing HTML <tbody> and the row with the <template>
const template = document.querySelector('#score-row');

/*
 * We must use querySelectorAll() (not querySelector()) to grab all of the <td>s into an array.
*/
const data = template.content.querySelectorAll('td');

/*
  1. Add next testScore (textContent) into data[0].
  2. Add next curvedScore (textContent) into data[1].
  3. Clone template's content. This will include <tr> and the data we just inserted into <td>s.
  4. Insert it into 'viewable' table. We place it in <tbody>.
  5. Repeat this process forEach element of each array. Also, by definition, both curvedScores and testScores will have same length.
*/
