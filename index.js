// Add your functions here
function map(sourceArray, funct) {
  return sourceArray.map(x => funct(x))
}

function reduce(sourceArray, funct, startingPoint=0) {
  return sourceArray.reduce((accum, element) => funct(element, startingPoint || accum), startingPoint)
}
