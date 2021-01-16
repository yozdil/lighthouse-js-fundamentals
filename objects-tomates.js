const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

// Function

const judgeVegetable = function (vegetables, metric) {
  let x = [];
  for (let i = 0; i < vegetables.length; i++) {
    x.push(vegetables[i][metric]);
  }
  let indexVal = x.indexOf(Math.max(...x))
  return vegetables[indexVal].submitter;
}

console.log(judgeVegetable(vegetables, metric))
