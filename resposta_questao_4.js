const matrix = [
  [1960, 2005],
  [1945, 2008],
  [1938, 1999]
];

function findYearsBetween(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function findMostWorkedYears(matrix) {
  let startedWorking = 0;
  let retirementYear = Number.MAX_SAFE_INTEGER;

  matrix.forEach((element) => {
    startedWorking = startedWorking < element[0] ? element[0] : startedWorking;
    retirementYear = retirementYear > element[1] ? element[1] : retirementYear;
  });

  return findYearsBetween(startedWorking, retirementYear);
}

console.log(findMostWorkedYears(matrix));
