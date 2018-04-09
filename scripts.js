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
const testScores = Array.from({ length: 10 }, () =>
  getRandomIntInclusive(60, 100)
);

const curvedScores = testScores.map(el => curveScore(el, 10));

// Generate a listing of the scores in the browser.

// Instantiate the table with the existing HTML <tbody> and the row with the <template>
const template = document.querySelector('#score-row');
// Grab <tbody> so we can insert the data from that we are adding to the template.
const tbody = document.querySelector('tbody');

/*
 * We must use querySelectorAll() (not querySelector()) to grab all of the <td>s into an array.
*/
const data = template.content.querySelectorAll('td');

for (let i = 0; i < testScores.length; i++) {
  data[0].textContent = testScores[i];
  data[1].textContent = curvedScores[i];

  const content = document.importNode(template.content, true);
  tbody.appendChild(content);
}
